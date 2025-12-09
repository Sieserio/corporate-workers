type state = 'active' | 'done' | 'cancel'

export interface ITask {
    id: number,
    description: string,
    extraInfo: string,
    state: state,
    reward: {
        coin: number,
        carma: number,
    },
    progress: number,
    time: string,
}