import Image from 'next/image'
import Link from 'next/link'


const ProjectItem = ({title, backgroundImg, projectUrl} : 
  {title: string}
  & {backgroundImg: any}
  & {projectUrl: string}
  )  => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-black rounded-xl p-4 group hover:bg-gradient-to-r from-[#363636] to-[#363636]'>
                    <Image className="rounded-xl group-hover:opacity-20" src={backgroundImg}  alt={"Background"}/>
                    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                        <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
                        <p className='pb-4 pt-2 text-white text-center'>Nice to see your there !</p>
                        <Link href={projectUrl ?? "projectUrl"}>
                            <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
                        </Link>
                    </div>
                </div>
  )
}

export default ProjectItem