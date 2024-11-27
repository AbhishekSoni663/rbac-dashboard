import AuditLog from "../component/AuditLog"
import Sidebar from "../component/Sidebar"

const AuditPage = () => {
  return (
    <>
          <div className="md:flex relative">
              <Sidebar />
              <div className="flex-1 p-4">
                  {/* <h1 className="text-xl font-semibold mb-4">Dashboard</h1> */}
                  <div className="grid grid-cols-1 lg:grid-cols-1 gap-4">
                     <AuditLog/>
                  </div>
              </div>
          </div>
    </>
  )
}

export default AuditPage