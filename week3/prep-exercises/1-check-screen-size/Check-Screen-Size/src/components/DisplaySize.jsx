import useWindowSize from '../hooks/useWindowSize';

function DisplaySize() {
    const { width, height } = useWindowSize();

    return (
        <div>
            <p>Window width: {width}px</p>
            <p>Window height: {height}px</p>
        </div>
    );
}

export default DisplaySize;