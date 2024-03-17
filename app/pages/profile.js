// import node module libraries
import { Col, Row, Container } from 'react-bootstrap';

// import widget as custom components
import { PageHeading } from '../../widgets'

// import sub components
import {
  AboutMe,
  ActivityFeed,
  MyTeam,
  ProfileHeader,
  ProjectsContributions,
  RecentFromBlog
} from '../../sub-components'

const Profile = () => {
  return (
    <Container fluid className="p-6">
      {/* Page Heading */}
      <PageHeading heading="Profile"/>

      {/* Profile Header  */}
      <ProfileHeader />

      {/* content */}
      <div className="py-6">
        <Row>

          {/* About Me */}
          <AboutMe />

          {/* Projects Contributions */}
         
          {/* Recent From Blog */}
      

          <Col xl={6} lg={12} md={12} xs={12} className="mb-6">

            {/* My Team */}
            <MyTeam />

            {/* Activity Feed */}
      

          </Col>
        </Row>
      </div>

    </Container>
  )
}

export default Profile