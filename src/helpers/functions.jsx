import Window from "../components/Window";


export const openWindow = () => {
    console.log("test")
  return( <Window/>)
}

export const onResize = (container) => {
  if (container.current) {
    const isFullScreen = container.current.style.width === '100vw';
    container.current.style.width = isFullScreen ? '50vw' : '100vw';
    container.current.style.height = isFullScreen ? '50%' : '100%';

  }
}