export interface TaskProps {
    id: number,
    description: string,
    reward: {
        coin: number,
        carma: number,
    },
    progress: number,
    time: string,
}