import { IconType } from "react-icons"

interface AdminSidebarItem {
    selected?: boolean,
    name: string,
    icon: IconType,
    url: string
}
const AdminSidebarItem:React.FC<AdminSidebarItem> = ({admin}) => {
  return (
    <div>AdminSidebarItem</div>
  )
}

export default AdminSidebarItem