export const handleStartWatch = (ref:React.RefObject<number>,setTimePassed:(timePassed:number)=>void ) => {
    const initialTime = new Date().getTime();
    clearInterval(ref.current)
    ref.current = setInterval(()=>{
        const currentTime = new Date().getTime();
        setTimePassed((currentTime - initialTime)/1000);
    }, 100)
}
export const handleStopWatch = (ref:React.RefObject<number>) => {
        clearInterval(ref.current)

}
export const handleResettWatch = (setTimePassed:(timePassed:number)=>void) => {
 setTimePassed(0);   
}