import React from "react";
import Head from "next/head";
import styled from "styled-components";

import AuthenticatedLayout from "../core/components/AuthenticatedLayout";
import Card, { Header, Body } from "../core/components/Card";
import NavigationBar from "../core/components/NavigationBar";
import Container from "../core/components/Container";
import Wallpaper from "../core/components/Wallpaper";
import ActivityPanel from "../core/components/ActivityPanel";
import NotificationPanel from "../core/components/NotificationPanel";
import ClassroomsList from "../core/components/ClassroomsList";
import withData from "../core/withData";

const Panel = styled.div`
  display: inline-block;
  width: ${p => p.width}%;
  height: 100%;
`;

class DashboardPage extends React.Component {
  render() {
    return [
      <Head>
        <title>หน้าหลัก | LEARNSPACE</title>
      </Head>,
      <AuthenticatedLayout>
        <NavigationBar isLoggedIn={true} />
        <Container>
          <Panel
            width="40"
            style={{
              float: "left"
            }}
          >
            <NotificationPanel />
          </Panel>
          <Panel
            width="60"
            style={{
              backgroundColor: "",
              height: "70%",
              marginBottom: "6em"
            }}
          >
            <Card fluidWidth textCenter padding="2em">
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  backgroundColor: "#333",
                  display: "inline-block",
                  marginRight: "1em"
                }}
              />
              <div
                style={{
                  width: "500px",
                  display: "inline-block",
                  textAlign: "left"
                }}
              >
                <h2>คุณสามารถดูการแจ้งเตือนและสิ่งที่เกิดขึ้นได้ที่นี่</h2>
                <p>
                  ศูนย์รวมการแจ้งเตือนต่างๆของห้องเรียนที่คุณได้สร้างหรือเข้าร่วม
                </p>
              </div>
            </Card>
            <ClassroomsList />
          </Panel>
          <ActivityPanel />
        </Container>
      </AuthenticatedLayout>
    ];
  }
}

export default withData(DashboardPage);
