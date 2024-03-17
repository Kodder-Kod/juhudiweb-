// import node module libraries
import { Container } from 'react-bootstrap';

// import widget as custom components
import { PageHeading } from '../../widgets'

// import sub components
import { Notifications, DeleteAccount, GeneralSetting, EmailSetting, Preferences } from '../../sub-components'

const Settings = () => {
  return (
    <Container fluid className="p-6">

      {/* Page Heading */}
      <PageHeading heading="Edit Profile" />

      {/* General Settings */}
      <GeneralSetting />

      {/* Email Settings */}
      <EmailSetting />

      {/* Settings for Preferences */}


      {/* Settings for Notifications */}


      {/* Delete Your Account */}
     
    </Container>
  )
}

export default Settings