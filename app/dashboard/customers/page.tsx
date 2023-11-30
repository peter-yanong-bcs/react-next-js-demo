import { HeartIcon } from "@heroicons/react/24/outline";

export default function Page(){
  return (<div>
    <p>This page is for RRV only</p> 
    <HeartIcon
      className="bg-red-500 text-gray-200"
    />
    </div>);
}