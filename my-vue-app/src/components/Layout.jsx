import { Sidebar } from './Sidebar'
import { Outlet } from 'react-router-dom';

export function Layout() {

  return (
    <div className="flex w-screen h-screen overflow-x-hidden bg-neutral-400">
      <Sidebar/>
      <Outlet/>
    </div>
  )
}

