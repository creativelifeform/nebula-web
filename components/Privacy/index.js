import { Content, Page } from '../primitives';

import React from 'react';
import { object } from 'prop-types';
import { withContent } from '../../common/utils';

const Privacy = ({
  content: {
    privacy: { title, text, features },
  },
}) => (
  <Page className="Privacy">
    <Content title={title} text={text}>
      <p>
        Our Privacy Policy was posted on 06 October 2019 and last updated on 06
        October 2019. It governs the privacy terms of our website, located
        at&nbsp;<a href="https://getnebula.app">getnebula.app</a>, and the tools
        we provide you (the "Website" or the "Service").
      </p>
      <h2>Your Privacy</h2>
      <p>
        Our Website follows all legal requirements to protect your privacy. Our
        Privacy Policy is a legal statement that explains how we may collect
        information from you, how we may share your information, and how you can
        limit our sharing of your information. You will see terms in our Privacy
        Policy that are capitalized. These terms have meanings as described in
        the Definitions section below.
      </p>
      <h2>Definitions</h2>
      <ul>
        <li>
          <p>
            <b>Personal Data:</b>
            &nbsp;Personal Data means data about a living individual who can be
            identified from those data (or from those and other information
            either in our possession or likely to come into our possession).
          </p>
        </li>
        <li>
          <p>
            <b>Usage Data:</b>
            &nbsp; Usage Data is data collected automatically either generated
            by the use of the Service or from the Service infrastructure itself
            (for example, the duration of a page visit). Cookies: Cookies are
            small pieces of data stored on a User's device.
          </p>
        </li>
        <li>
          <p>
            <b>Cookies:</b>
            &nbsp;Cookies are small pieces of data stored on a User's device
          </p>
        </li>
        <li>
          <p>
            <b>Data Controller:</b>
            &nbsp;Data Controller means a natural or legal person who (either
            alone or jointly or in common with other persons) determines the
            purposes for which and the manner in which any personal data are, or
            are to be, processed. For the purpose of this Privacy Policy, we are
            a Data Controller of your data
          </p>
        </li>
        <li>
          <p>
            <b>Data Processors (or Service Providers):</b>
            &nbsp;Data Processor (or Service Provider) means any natural or
            legal person who processes the data on behalf of the Data
            Controller. We may use the services of various Service Providers in
            order to process your data more effectively
          </p>
        </li>
        <li>
          <p>
            <b>Data Subject:</b>
            &nbsp;Data Subject is any living individual who is the subject of
            Personal Data
          </p>
        </li>
        <li>
          <p>
            <b>User:</b>
            &nbsp;The User is the individual using our Service. The User
            corresponds to the Data Subject, who is the subject of Prsonal Data.
          </p>
        </li>
      </ul>
      <h2>Information Collection And Use</h2>
      <p>
        We collect several different types of information for various purposes
        to provide and improve our Service to you.
      </p>
      <h3>Types of Data Collected</h3>
      <ul>
        <li>
          <h4>Personal Data</h4>
          <p>
            While using our Service, we may ask you to provide us with certain
            personally identifiable information that can be used to contact or
            identify you ("Personal Data"). Personally identifiable information
            may include, but is not limited to: Email address, Name, Address,
            State, Province, ZIP/Postal code, City, Cookies and Usage Data.
          </p>
          <p>
            We may use your Personal Data to contact you with newsletters,
            marketing or promotional materials and other information that may be
            of interest to you. You may opt out of receiving any, or all, of
            these communications from us by following the unsubscribe link or
            instructions provided in any email we send.
          </p>
        </li>
        <li>
          <h4>Usage Data</h4>
          <p>
            We may also collect information how the Service is accessed and used
            ("Usage Data"). This Usage Data may include information such as your
            computer's Internet Protocol address (e.g. IP address), browser
            type, browser version, the pages of our Service that you visit, the
            time and date of your visit, the time spent on those pages, unique
            device identifiers and other diagnostic data.
          </p>
        </li>
        <li>
          <h4>Tracking & Cookies Data</h4>
          <p>
            We use cookies and similar tracking technologies to track the
            activity on our Service and hold certain information.
          </p>
          <p>
            Cookies are files with small amount of data which may include an
            anonymous unique identifier. Cookies are sent to your browser from a
            website and stored on your device. Tracking technologies also used
            are beacons, tags, and scripts to collect and track information and
            to improve and analyze our Service.
          </p>
          <p>
            You can instruct your browser to refuse all cookies or to indicate
            when a cookie is being sent. However, if you do not accept cookies,
            you may not be able to use some portions of our Service.
          </p>
          <p>
            Examples of Cookies we use: <b>session cookies</b> (we use these
            cookies to operate our Service).
          </p>
        </li>
      </ul>
      <h2>Use of Data</h2>
      <p>We use the collected data for various purposes:</p>
      <ul>
        <li>To provide and maintain our Service</li>
        <li>To notify you about changes to our Service</li>
        <li>
          To allow you to participate in interactive features of our Service
          when you choose to do so
        </li>
        <li>To provide customer support</li>
        <li>
          To gather analysis or valuable information so that we can improve our
          Service
        </li>
        <li>To monitor the usage of our Service</li>
        <li>To detect, prevent and address technical issues</li>
        <li>
          To provide you with news, special offers and general information about
          other goods, services and events which we offer that are similar to
          those that you have already purchased or enquired about unless you
          have opted not to receive such information
        </li>
      </ul>
      <h2>Retention of Data</h2>
      <p>
        We will retain your Personal Data only for as long as is necessary for
        the purposes set out in this Privacy Policy. We will retain and use your
        Personal Data to the extent necessary to comply with our legal
        obligations (for example, if we are required to retain your data to
        comply with applicable laws), resolve disputes, and enforce our legal
        agreements and policies.
      </p>
      <p>
        We will also retain Usage Data for internal analysis purposes. Usage
        Data is generally retained for a shorter period of time, except when
        this data is used to strengthen the security or to improve the
        functionality of our Service, or we are legally obligated to retain this
        data for longer time periods.
      </p>
      <h2>Transfer Of Data</h2>
      <p>
        Your information, including Personal Data, may be transferred to — and
        maintained on — computers located outside of your state, province,
        country or other governmental jurisdiction where the data protection
        laws may differ than those from your jurisdiction.
      </p>
      <p>
        We will take all steps reasonably necessary to ensure that your data is
        treated securely and in accordance with this Privacy Policy and no
        transfer of your Personal Data will take place to an organization or a
        country unless there are adequate controls in place including the
        security of your data and other personal information.
      </p>
      <p>
        Your consent to this Privacy Policy followed by your submission of such
        information represents your agreement to that transfer.
      </p>
      <h2>Disclosure Of Data</h2>
      <ul>
        <li>
          <h4>Business Transaction</h4>
          <p>
            If we are involved in a merger, acquisition or asset sale, your
            Personal Data may be transferred. We will provide notice before your
            Personal Data is transferred and becomes subject to a different
            Privacy Policy.
          </p>
        </li>
        <li>
          <h4>Disclosure for Law Enforcement</h4>
          <p>
            Under certain circumstances, we may be required to disclose your
            Personal Data if required to do so by law or in response to valid
            requests by public authorities (e.g. a court or a government
            agency).
          </p>
        </li>
      </ul>
      <h4>Security Of Data</h4>
      <p>
        The security of your data is important to us, but remember that no
        method of transmission over the Internet, or method of electronic
        storage is 100% secure. While we strive to use commercially acceptable
        means to protect your Personal Data, we cannot guarantee its absolute
        security.
      </p>
      <h2>
        Legal Basis for Processing Personal Data Under General Data Protection
        Regulation (GDPR)
      </h2>
      <p>
        If you are from the European Economic Area (EEA), Nebula legal basis for
        collecting and using the personal information described in this Privacy
        Policy depends on the Personal Data we collect and the specific context
        in which we collect it.
      </p>
      <p>Nebula may process your Personal Data because:</p>
      <ul>
        <li>We need to perform a contract with you</li>
        <li>You have given us permission to do so</li>
        <li>
          The processing is in our legitimate interests and it's not overridden
          by your rights
        </li>
        <li>For payment processing purposes</li>
        <li>To comply with the law</li>
      </ul>
      <h2>
        Your Data Protection Rights Under General Data Protection Regulation
        (GDPR)
      </h2>
      <p>
        If you are a resident of the European Economic Area (EEA), you have
        certain data protection rights. Nebula aims to take reasonable steps to
        allow you to correct, amend, delete, or limit the use of your Personal
        Data.
      </p>
      <p>
        If you wish to be informed what Personal Data we hold about you and if
        you want it to be removed from our systems, please contact us.
      </p>
      <p>
        In certain circumstances, you have the following data protection rights:
      </p>
      <ul>
        <li>
          <p>
            <b>The right to access, update or to delete</b> the information we
            have on you.
          </p>
        </li>
        <li>
          <p>
            <b>The right of rectification</b>. You have the right to have your
            information rectified if that information is inaccurate or
            incomplete.
          </p>
        </li>
        <li>
          <p>
            <b>The right to object</b>. You have the right to object to our
            processing of your Personal Data.
          </p>
        </li>
        <li>
          <p>
            <b>The right of restriction</b>. You have the right to request that
            we restrict the processing of your personal information.
          </p>
        </li>
        <li>
          <p>
            <b>The right to data portability</b>. You have the right to be
            provided with a copy of your Personal Data in a structured,
            machine-readable and commonly used format.
          </p>
        </li>
        <li>
          <p>
            <b>The right to withdraw consent</b>. You also have the right to
            withdraw your consent at any time where Nebula relied on your
            consent to process your personal information.
          </p>
        </li>
      </ul>
      <p>
        Please note that we may ask you to verify your identity before
        responding to such requests.
      </p>
      <p>
        You have the right to complain to a Data Protection Authority about our
        collection and use of your Personal Data. For more information, please
        contact your local data protection authority in the European Economic
        Area (EEA).
      </p>
      <h2>Service Providers</h2>
      <p>
        We may employ third party companies and individuals to facilitate our
        Service ("Service Providers"), to provide the Service on our behalf, to
        perform Service-related services or to assist us in analyzing how our
        Service is used.
      </p>
      <p>
        These third parties have access to your Personal Data only to perform
        these tasks on our behalf and are obligated not to disclose or use it
        for any other purpose.
      </p>
      <h2>Analytics</h2>
      <p>
        We may use third-party Service Providers to monitor and analyze the use
        of our Service.
      </p>
      <ul>
        <li>
          <h4>Google Analytics</h4>
          <p>
            Google Analytics is a web analytics service offered by Google that
            tracks and reports website traffic. Google uses the data collected
            to track and monitor the use of our Service. This data is shared
            with other Google services. Google may use the collected data to
            contextualize and personalize the ads of its own advertising
            network.
          </p>
          <p>
            You can opt-out of having made your activity on the Service
            available to Google Analytics by installing the Google Analytics
            opt-out browser add-on. The add-on prevents the Google Analytics
            JavaScript (ga.js, analytics.js, and dc.js) from sharing information
            with Google Analytics about visits activity.
          </p>
          <p>
            For more information on the privacy practices of Google, please
            visit the Google Privacy & Terms web page:&nbsp;
            <a href="http://www.google.com/intl/en/policies/privacy/">
              http://www.google.com/intl/en/policies/privacy/
            </a>
          </p>
        </li>
      </ul>
      <h2>Links To Other Sites</h2>
      <p>
        Our Service may contain links to other sites that are not operated by
        us. If you click on a third party link, you will be directed to that
        third party's site. We strongly advise you to review the Privacy Policy
        of every site you visit.
      </p>
      <p>
        We have no control over and assume no responsibility for the content,
        privacy policies or practices of any third party sites or services.
      </p>
      <h2>Children's Privacy</h2>
      <p>
        Our Service does not address anyone under the age of 18 ("Children").
      </p>
      <p>
        We do not knowingly collect personally identifiable information from
        anyone under the age of 18. If you are a parent or guardian and you are
        aware that your Children has provided us with Personal Data, please
        contact us. If we become aware that we have collected Personal Data from
        children without verification of parental consent, we take steps to
        remove that information from our servers.
      </p>
      <h2>Changes To This Privacy Policy</h2>
      <p>
        We may update our Privacy Policy from time to time. We will notify you
        of any changes by posting the new Privacy Policy on this page.
      </p>
      <p>
        We will let you know via email and/or a prominent notice on our Service,
        prior to the change becoming effective and update the "effective date"
        at the top of this Privacy Policy.
      </p>
      <p>
        You are advised to review this Privacy Policy periodically for any
        changes. Changes to this Privacy Policy are effective when they are
        posted on this page.
      </p>
      <h2>Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us
        via our official twitter accounts
      </p>
      <ul>
        <li>
          <p>
            <a href="https://twitter.com/getnebula">
              <b>Product</b>
            </a>
          </p>
        </li>
        <li>
          <p>
            <a href="https://twitter.com/creativlifeform">
              <b>Company</b>
            </a>
          </p>
        </li>
      </ul>
    </Content>
  </Page>
);

Privacy.propTypes = {
  content: object.isRequired,
};

export default withContent(Privacy);
