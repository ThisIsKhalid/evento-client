"use client";
import { useAppDispatch } from "@/redux/hooks";
import { showSidebarDrawer } from "@/redux/slices/sidebarSlice";
import { MenuOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Drawer, Layout, Menu, Tooltip, Typography } from "antd";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const { Header, Content } = Layout;
const { Title } = Typography;

const Navbar = () => {
  const items = [
    { key: "1", label: "Home", href: "/" },
    {
      key: "2",
      label: "Categories",
      href: "/categories",
      subItems: [
        { key: "2.1", label: "Sub Item 1", href: "/sub-item-1" },
        { key: "2.2", label: "Sub Item 2", href: "/sub-item-2" },
        { key: "2.3", label: "Sub Item 3", href: "/sub-item-3" },
        { key: "2.4", label: "Sub Item 4", href: "/sub-item-4" },
        { key: "2.5", label: "Sub Item 5", href: "/sub-item-5" },
      ],
    },
    { key: "3", label: "Events", href: "/events" },
    { key: "5", label: "Contact Us", href: "/contact-us" },
  ];

  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const dispatch = useAppDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout className="layout ">
      <Header className="flex items-center justify-between py-10 bg-white">
        <div>
          <Content>
            <Link href="/">
              <Title className="m-0 text-cBlack font-bold text-4xl md:text-4xl">
                evento
              </Title>
            </Link>
          </Content>
        </div>
        <Menu
          className="lg:block hidden bg-white border-none"
          disabledOverflow
          theme="light"
          mode="horizontal"
          selectedKeys={[pathname]}
        >
          {items?.map((item) => {
            if (item.subItems) {
              return (
                <Menu.SubMenu key={item.href} title={item.label} className="">
                  {item.subItems.map((subItem) => (
                    <Menu.Item key={subItem.href}>
                      <Link href={subItem.href} className="text-base">
                        {subItem.label}
                      </Link>
                    </Menu.Item>
                  ))}
                </Menu.SubMenu>
              );
            } else {
              return (
                <Menu.Item key={item.href}>
                  <Link href={item.href} className="text-base">
                    {item.label}
                  </Link>
                </Menu.Item>
              );
            }
          })}
        </Menu>

        <div className="lg:flex hidden items-center gap-5">
          <Tooltip title="Cart" color="#2b2d42">
            <ShoppingCartOutlined className="text-cBlack text-[22px]" />
          </Tooltip>

          <Tooltip title="Profile" color="#2b2d42">
            <UserOutlined className="text-cBlack text-xl" />
          </Tooltip>

          <Button
            type="primary"
            onClick={() => {}}
            className="hover:bg-white hover:text-cBlack border-cBlack bg-cBlack text-white hover:font-semibold"
          >
            Sign Out
          </Button>

          {/* <Button
            type="primary"
            onClick={() => {
              router.push("/login");
            }}
            className="hover:bg-white hover:text-cBlack border-cBlack bg-cBlack text-white hover:font-semibold"
          >
            Sign In / register
          </Button> */}
        </div>

        <Button className="lg:hidden bg-cWhite" onClick={showDrawer}>
          <MenuOutlined />
        </Button>
        <Drawer title="Menu" placement="right" onClose={onClose} open={open}>
          <Menu
            theme="light"
            mode="inline"
            selectedKeys={[pathname]}
            style={{ borderRight: 0 }}
            onClick={onClose}
          >
            {items?.map((item) => {
              if (item.subItems) {
                return (
                  <Menu.SubMenu key={item.href} title={item.label}>
                    {item.subItems.map((subItem) => (
                      <Menu.Item key={subItem.href}>
                        <Link href={subItem.href}>{subItem.label}</Link>
                      </Menu.Item>
                    ))}
                  </Menu.SubMenu>
                );
              } else {
                return (
                  <Menu.Item key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                  </Menu.Item>
                );
              }
            })}
          </Menu>
        </Drawer>
      </Header>
    </Layout>
  );
};

export default Navbar;
