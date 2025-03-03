import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { io } from 'socket.io-client';



const Selector = () => {
    const socket = io('https://2508hb2q-3000.inc1.devtunnels.ms');
    const [code, setCode] = useState();
    const [started, setStarted] = useState(false);
    const [file, setFile] = useState([]);

    const [list, setList] = useState([]);
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(file);

    }, [file])

    const submitHandler = async (e) => {
        setFile(e.target.files[0])
        setList((preElements) => [...preElements, e.target.files[0].name])

        console.log(code);
        let details = document.getElementById('share-details');
        details.style.display = 'block'
        const formData = new FormData();
        console.log(file)
        formData.append('files', e.target.files[0]);
        if (started === false) {
            const genaretedCode = Math.floor(Math.random() * 10000)
            setCode(genaretedCode)
            setStarted(true);
            formData.append("code", genaretedCode);
        } else {
            formData.append("code", code);
        }

        setCount((pre) => pre + 1);
        try {
            const response = await axios.post(`https://2508hb2q-3000.inc1.devtunnels.ms/send-file`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            console.log("send");
            socket.emit("file-send", { files: response.data.files });

        } catch (error) {
            console.error("Error uploading file:", error);
        }

    };

    return (
        <div>
            <div className='bg-[#13204c] w-max p-5 rounded-3xl flex justify-center items-center'>
                <div className='bg-blue-950 w-[300px] p-5 rounded-3xl border-2 border-dashed border-white hover:bg-[#13204c]'>
                    <div className='flex justify-center' id="sel-files">
                        <div id='rmdv1'>
                            <label htmlFor="file-inp" className='h-fit w-auto cursor-pointer hover:bg-[#13204c]' id='chgsvg'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-20 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            </label>
                            <input type="file" id="file-inp" className='hidden' onChange={submitHandler} />
                        </div>
                    </div>
                    <div className='w-[250px] align-center mt-5' id="det2">
                        <h1 className='text-2xl text-white font-[roboto]'>Click to browse files for <p className='ml-20'>sharing</p></h1>
                    </div>
                </div>
            </div>
            <div className='bg-[#13204c] h-max rounded-2xl'>
                <div className='w-[340px]  bg-blue-950 text-2xl px-1 py-5 mt-5 font-[roboto] text-white  p rounded-2xl border-2 border-white border-dashed hidden ' id='share-details'>
                    <div>
                        <div className='flex justify-center items-center text center gap-20 mb-3'>
                            <h1 className='text-3xl font-semibold w-fit'>Shared Files</h1><span className='text-blue-950 font-[roboto] bg-[#fdc500] px-2 rounded-full' >{count}</span>
                        </div>
                        <div><p className='text-[15px] p-2'>Here is your Share Link. You can share it with others.</p></div>
                        <div className=''><a href={"https://2508hb2q-5173.inc1.devtunnels.ms/nearby/" + code} target='_blank' className='font-semibold font-[roboto] text-xl w-auto bg-[#080f27] p-2 rounded-2xl mt-5'>https://2508hb2q-5173.inc1.devtunnels.ms/nearby/{code}</a></div>
                        <div className='overflow-y-auto h-[150px] mt-5'>
                            <ul className='text-lg mt-3'>{list.map((item, key) => (
                                <li key={key} className='ml-2'>{item}</li>
                            ))}</ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='px-5 py-3 mt-5 rounded-3xl hidden text-center' id='code1'>
                    <h1 className='text-white text-2xl font-[roboto]'>Here is Your Code : <p className='font-semibold inline'>{code}</p></h1>
                    <h2 className='text-white text-lg'>Share it with those whom you wanted to share files.</h2>
                </div> */}
        </div>
    )
}

export default Selector
