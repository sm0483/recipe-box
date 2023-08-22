import {FcGoogle} from 'react-icons/fc'
import Image from 'next/image';
import Logo from '../../../public/logo/logo.jpg'
import { signIn,useSession } from "next-auth/react";


const Login = () => {

  const {data: session} = useSession();

  const onLogin = async(e) => {
      const response = await signIn("google");
      console.log(response);
  }
  if (session) {
    console.log(session.user);
    window.location.replace("/home");
  }else{

    return (  
    <main className="w-full select-none bg-black ">
      <div className="shade h-screen bg-background bg-cover lg:w-2/5"></div>
      <section className="absolute top-0 flex h-screen w-full flex-col justify-between px-6 pt-8 md:pt-12 lg:pl-[45%] ">
        <div>
            <Image src={Logo}
            width={200}
            height={200}
            className='w-40 h-10 lg:w-20 object-cover hover:scale-110 duration-500'
            alt='logo'
            />
        </div>
        <div className="pb-[50%] text-black md:pb-[30%] lg:pb-[50%] ">
        <button className='min-w-[40%]' onClick={onLogin}>
            <div className='flex bg-white p-2 items-center rounded-lg justify-center gap-4 '>
                <FcGoogle size={30}/>
                <span>Login with Google</span>
            </div>
        </button>
        </div>
      </section>
    </main>
       
    );
  }

}

export default Login;