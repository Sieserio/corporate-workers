export interface TaskActiveProps {
    id: number,
    description: string,
    reward: {
        coin: number,
        carma: number,
    },
    progress: number,
    time: string,
}