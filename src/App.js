import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <div className=" bg-white flex flex-col justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[30rem] w-80 rounded-2xl">
        <div className=''>
          <img src='../image-qr-code.png' alt='image' className='rounded-2xl object-contain w-64' />
        </div>
        <div className='flex flex-col justify-center items-center mt-6'>
          <p className='font-bold text-xl'>Improve your front-end <br />skills by building projects</p>

          <p className='text-center mt-2 text-slate-500'>Scan the QR code to visit Frontend <br />Mentor and take your coding skills to <br /> the next level</p>
        </div>
      </div>
    </>
  );
}

export default App;
