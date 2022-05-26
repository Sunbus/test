import { BehaviorSubject, distinctUntilChanged, map, Observable } from 'rxjs'


export class ProtoState<State> {
  public readonly defaultState: State
  private readonly subject$: BehaviorSubject<State>

  constructor(defaultState: State) {
    this.defaultState = defaultState
    this.subject$ = new BehaviorSubject(defaultState)
  }

  public push(newState: Partial<State>): void {
    const currentState: State = this.state
    const nextState: State = { ...currentState, ...newState }

    this.subject$.next(nextState)
  }

  public get state(): State {
    return this.subject$.getValue()
  }

  public get state$(): BehaviorSubject<State> {
    return this.subject$
  }

  public get changes$(): Observable<State> {
    return this.subject$.pipe(
      distinctUntilChanged()
    )
  }

  public selectChanges$<K extends keyof State>(key: K): Observable<State[K]> {
    return this.subject$.pipe(
      map((state: State) => state[key]),
      distinctUntilChanged()
    )
  }

  public setDefaultState(): void {
    this.push(this.defaultState)
  }

  public destroy(): void {
    this.subject$.complete()
  }
}
