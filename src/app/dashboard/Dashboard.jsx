import Link from "next/link"; // Import Link from Next.js
import { Layout, Menu, theme } from "antd";
import { usePathname, useRouter } from "next/navigation";
import { FiBox } from "react-icons/fi";
import { MdOutlineShoppingCartCheckout, MdOutlinePayments, MdOutlineDashboardCustomize } from "react-icons/md";
import Image from "next/image";
import Logo from "../../../public/logo-2.png"

const { Header, Content, Footer, Sider } = Layout;

const Dashboard = ({ children }) => {
  const pathName = usePathname();
  // Map the current pathname to the corresponding menu key
  const getCurrentMenuKey = (pathname) => {
    switch (pathname) {
      case "/dashboard/adminHome":
        return "1";
      case "/dashboard/trial":
        return "2";
      case "/dashboard/order":
        return "3";
      case "/dashboard/transaction":
        return "4";
      default:
        return "1";
    }
  };

  const currentMenuKey = getCurrentMenuKey(pathName);

  const items = [
    {
      key: "1",
      icon: <MdOutlineDashboardCustomize size={20} />,
      label: (
        <Link href="/dashboard/adminHome" legacyBehavior>
        Admin Home
        </Link>
      ),
    },
    {
      key: "2",
      icon: <FiBox size={20} />,
      label: (
        <Link href="/dashboard/trial" legacyBehavior>
          Trials
        </Link>
      ),
    },
    {
      key: "3",
      icon: <MdOutlineShoppingCartCheckout size={20} />,
      label: (
        <Link href="/dashboard/order" legacyBehavior>
          Order
        </Link>
      ),
    },
    {
      key: "4",
      icon: <MdOutlinePayments size={20} />,
      label: (
        <Link href="/dashboard/transaction" legacyBehavior>
          Transaction
        </Link>
      ),
    },
  ];

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        breakpoint="xs"
        collapsedWidth="0"
        className="lg:p-2 p-0" 
        onBreakpoint={(broken) => {
          // console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          // console.log(collapsed, type);
        }}
      >
       <div className="flex justify-start p-3 mt-3 mb-5">
       <Image src={Logo} alt="Cluster" className="w-[120px] h-[30px]"/>
       </div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[currentMenuKey]}   
          items={items}
        />
      </Sider>
    </Layout>
  );
};

export default Dashboard;
