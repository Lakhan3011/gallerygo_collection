import { Navbar, Text, Link, Avatar, Dropdown, Input } from "@nextui-org/react";
import { Layout } from "../Components/Layout";
import { SearchIcon } from "../Components/SearchIcon";
import Image from "next/image";
import Logo from "../Components/GG_bg.png";

export default function App() {
  const collapseItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];
  return (
    <Layout>
      <Navbar isBordered variant="sticky">
        <Navbar.Toggle showIn="xs" aria-label="toggle navigation" />
        <Navbar.Brand
          css={{
            "@xs": {
              w: "12%",
            },
          }}
        >
          <Image src={Logo} width={100} />
          <Text b color="inherit" css={{ mr: "$11" }} hideIn="xs">
            GALLERYGO
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs" variant="highlight">
          <Navbar.Link isActive href="#">
            Upload
          </Navbar.Link>
          <Navbar.Link href="#">Dashboard</Navbar.Link>
          <Navbar.Link href="#">Home</Navbar.Link>
          <Navbar.Link href="#">FAQ</Navbar.Link>
        </Navbar.Content>

        <Navbar.Content
          css={{
            "@xsMax": {
              w: "100%",
              jc: "space-between",
            },
          }}
        >
          <Navbar.Item
            css={{
              "@xsMax": {
                w: "100%",
                jc: "center",
              },
            }}
          >
            <Input
              clearable
              contentLeft={
                <SearchIcon fill="var(--nextui-colors-accents6)" size={16} />
              }
              contentLeftStyling={false}
              css={{
                w: "100%",
                "@xsMax": {
                  mw: "300px",
                },
                "& .nextui-input-content--left": {
                  h: "100%",
                  ml: "$4",
                  dflex: "center",
                },
              }}
              placeholder="Search..."
            />
          </Navbar.Item>
          <Dropdown placement="bottom-right">
            <Navbar.Item>
              <Dropdown.Trigger>
                <Avatar
                  bordered
                  as="button"
                  color="primary"
                  size="md"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
              </Dropdown.Trigger>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label="User menu actions"
              color="secondary"
              onAction={(actionKey) => console.log({ actionKey })}
            >
              <Dropdown.Item key="profile" css={{ height: "$18" }}>
                <Text b color="inherit" css={{ d: "flex" }}>
                  Signed in as
                </Text>
                <Text b color="inherit" css={{ d: "flex" }}>
                  zoey@example.com
                </Text>
              </Dropdown.Item>
              <Dropdown.Item key="settings" withDivider>
                Dashboard
              </Dropdown.Item>
              <Dropdown.Item key="team_settings">My Settings</Dropdown.Item>
              <Dropdown.Item key="analytics" withDivider>
                Upload
              </Dropdown.Item>
              <Dropdown.Item key="system">Photos</Dropdown.Item>
              <Dropdown.Item key="configurations">Home</Dropdown.Item>
              <Dropdown.Item key="help_and_feedback" withDivider>
                Help & Feedback
              </Dropdown.Item>
              <Dropdown.Item key="logout" withDivider color="error">
                Log Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Content>
        <Navbar.Collapse>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem
              key={item}
              activeColor="secondary"
              css={{
                color: index === collapseItems.length - 1 ? "$error" : "",
              }}
              isActive={index === 2}
            >
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href="#"
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </Layout>
  );
}
