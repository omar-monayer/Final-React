import AdminLayout from "../components/AdminLayout";
import AdminPanel from "../components/AdminPanel";
import IndustryTable from "../components/IndustryTable";
import { industryData } from "../data/industryData";

function IndustryDashboard() {
  return (
    <AdminLayout>
      <AdminPanel title="Industry Data" addPath="/admin/industry/add">
        <IndustryTable rows={industryData} />
      </AdminPanel>
    </AdminLayout>
  );
}

export default IndustryDashboard;