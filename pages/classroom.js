import React from "react";
import Link from "next/link";
import Head from "next/head";
import styled from "styled-components";

import AuthenticatedLayout from "../core/components/AuthenticatedLayout";
import Card, { Header, Body } from "../core/components/Card";
import { PrimaryButton } from "../core/components/Button";
import NavigationBar from "../core/components/NavigationBar";
import Container from "../core/components/Container";
import ClassroomsList from "../core/components/ClassroomsList";
import Panel from "../core/components/Panel";
import ActivityPanel from "../core/components/ActivityPanel";
import ProfileInfoPanel from "../core/components/ProfileInfoPanel";
import PostsList from "../core/components/PostsList";
import withData from "../core/withData";

const ClassroomHeaderPanel = Card.extend`
  position: absolute;
  left: 0;
  max-width: 100%;
  padding: 2em;
  text-align: center;
`;

const ClassroomNameHeading = styled.h1`
  color: ${p => p.theme.primaryColor};
  font-size: 1.7em;
  font-weight: 400;
`;

const Seperator = styled.div`
  width: 30%;
  height: 2px;
  background-color: ${p => p.theme.primaryColor};
  margin: 1em auto;
`;

const ClassroomCourseInfoContainer = styled.div`
  width: 100%;
  padding: 3em 3em 1em 3em;
`;

const ClassroomCourseInfoHeading = styled.h2`
  color: ${p => p.theme.primaryColor};
  font-weight: 400;
`;

const CourseOutline = styled.ul``;

const CourseOutlineItem = styled.li`
  color: #777;
  font-size: 1.1em;
  font-weight: 300;
`;

const ClassroomBreifInfo = styled.p`
  color: #777;
  font-size: 1.1em;
  font-weight: 300;
  span {
    color: ${p => p.theme.primaryColor};
    font-weight: 400;
  }
`;

const ClassroomPanelButtonsGroup = styled.div`
  text-align: center;
  margin: 1em auto;
`;

class ClassroomPage extends React.Component {
  static async getInitialProps({ query: { id } }) {
    return { classId: id, className: "Introduction to Computer Science" };
  }

  componentDidMount = () => console.log(this.props.classId);

  render() {
    return [
      <Head>
        <title>{this.props.className} | LEARNSPACE</title>
      </Head>,
      <AuthenticatedLayout>
        <NavigationBar isLoggedIn={true} />
        <ClassroomHeaderPanel>
          <ClassroomNameHeading>{this.props.className}</ClassroomNameHeading>
          <Seperator />
          <ClassroomBreifInfo>
            จำนวนสมาชิก <span>30</span> โพสทั้งหมด <span>10</span> การบ้าน{" "}
            <span>5</span> การสอบ <span>2</span>
          </ClassroomBreifInfo>
        </ClassroomHeaderPanel>
        <Container style={{ marginTop: "10em" }}>
          <Panel left width="40">
            <ProfileInfoPanel>
              <ClassroomCourseInfoContainer>
                <ClassroomCourseInfoHeading>
                  รายละเอียดหลักสูตร
                </ClassroomCourseInfoHeading>
                <CourseOutline>
                  <CourseOutlineItem>Explain course outline</CourseOutlineItem>
                  <CourseOutlineItem>
                    Calculus and Analytic Geometry
                  </CourseOutlineItem>
                  <CourseOutlineItem>
                    Getting started with Python programming
                  </CourseOutlineItem>
                  <CourseOutlineItem>
                    Data Structures and Algorithms
                  </CourseOutlineItem>
                  <CourseOutlineItem>Final Project</CourseOutlineItem>
                  <CourseOutlineItem>Examination</CourseOutlineItem>
                </CourseOutline>
              </ClassroomCourseInfoContainer>
              <ClassroomPanelButtonsGroup>
                <Link href="/chatroom" prefetch>
                  <PrimaryButton>ห้องแชท</PrimaryButton>
                </Link>
              </ClassroomPanelButtonsGroup>
            </ProfileInfoPanel>
          </Panel>
          <Panel right style={{ height: "850px" }} width="60">
            <PostsList height="700px" />
          </Panel>
          <ActivityPanel />
        </Container>
      </AuthenticatedLayout>
    ];
  }
}

export default ClassroomPage;
