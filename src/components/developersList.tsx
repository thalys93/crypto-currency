import { useContext } from "react";
import { Image } from "react-bootstrap";
import { WindowSizeContext } from "../utils/context/Responsive_Context";


function DevelopersList() {
    const windowSize = useContext(WindowSizeContext);  
    const avatarList = [
        { id: 1, name: "Luis Thalys", avatar: 'https://avatars.githubusercontent.com/u/102838847?s=400&u=02cea61f2704080ae52e8afc090ca92d52e4740a&v=4', link: 'https://github.com/thalys93' },
        { id: 2, name: "", avatar: 'https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg' },
        { id: 3, name: "", avatar: 'https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg' },
        { id: 4, name: "", avatar: 'https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg' },
    ];
    return (
        <div className={windowSize < 768 ? 'flex flex-row gap-2 mt-5 items-center justify-center' : 'flex flex-row gap-2 mt-5 items-center'}>
            <span className="text-slate-200 select-none"> Devs: </span>
            {avatarList.map((avatar) => (
                <a href={avatar.link} target='_blank' className='transition-all hover:scale-105 border-transparent hover:border-emerald-500 border-[1px] rounded-full'>
                    <div key={avatar.id} className='flex flex-col gap-3'>
                        <Image src={avatar.avatar} className='w-[1.9rem] h-[1.9rem] object-fill rounded-full' alt={avatar.name} />
                    </div>
                </a>
            ))}
        </div>
    )
}

export default DevelopersList