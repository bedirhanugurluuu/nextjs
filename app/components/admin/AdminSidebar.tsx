import AdminSidebarItem from "./AdminSidebarItem"
import { MdDashboard, MdBorderOuter, MdOutlineCreate } from "react-icons/md";


const AdminSidebar = () => {
    const adminPanel = [
        {
            name: "Özetler",
            icon: MdDashboard,
            url: "/admin"
        },
        {
            name: "Ürün Oluştur",
            icon: MdOutlineCreate,
            url: "/admin/create"
        },
        {
            name: "Siparişlerim",
            icon: MdBorderOuter,
            url: "/admin/order"
        },
    ]
  return (
    <div className="w-1/5 border-r h-screen">
        <div>
            {
                adminPanel.map((admin,i) => (
                    <AdminSidebarItem key={i} admin={admin} />
                ))
            }
        </div>
    </div>
  )
}

export default AdminSidebar