import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import styles from "../Terms/style.module.scss";
import { withLoader } from "../../Components/Loader";
import Layout from "../../Components/Layout";

function Privacy() {
  return (
    <Layout>
      <Row className={styles.row}>
        <Col xs={12} md={10} lg={8} xl={6} className={styles.grid}>
          <h1 className="title center ">WEBSITE PRIVACY POLICY</h1>
          <h1 className="title24 mt-30">
            Last Revised: <span className="title22r">01/01/2023</span>
          </h1>
          <p className="desc">
            Epilog End of Life Companion Ltd., together with its subsidiaries (
            <b>“Epilog,” “Company,” “we,” “our” </b> or <b> “us”</b>) respects
            the privacy of the visitors and/or users of its Site (
            <b>“User(s)”</b> or <b>“you”</b>) and is committed to protecting the
            personal information that its Users share with it.
          </p>
          <p className="desc">
            This privacy policy (the <b>“Site Privacy Policy”</b>) is intended
            to describe our practices regarding the information we may collect
            from you when you use and access our Site(s) located at{" "}
            <a href="https://epilog.world"> https://epilog.world </a> and any
            of their respective sub-domains (the
            <b> “Site”</b>).
          </p>
          <p className="desc">
            Capitalized terms which are not defined herein, shall have the
            meaning ascribed to them in our Site Terms of Use available at
            <a href="https://app.epilog.world/terms">
              {" "}
              https://app.epilog.world/terms{" "}
            </a> 
            (the <b> “Site Terms of Use”</b>), which this Site Privacy
            Policy is incorporated thereto by reference.
          </p>
          <h1 className="title24">Scope and Applicability</h1>
          <p className="desc">
            This Site Privacy Policy applies only in connection with your use of
            the Site. This Site Privacy Policy does not apply to any use of the
            Epilog Solution (as such term is defined in the Site Terms of Use)
            and other related services, which are governed solely by Site Terms
            of Use and this Site Privacy Policy (available at
            <a href="https://app.epilog.world/privacy">
              {" "}
              https://app.epilog.world/privacy
            </a>{" "}
            (the Site Terms of Use and the Site Privacy Policy shall be regarded
            collectively herein as the <b>“Epilog Website Terms”</b>).
          </p>
          <p className="desc">
            Please note that the Site is only intended for individuals aged
            eighteen (18) years or older. If you are under 18 years of age,
            please do not visit or use the Site.
          </p>
          <h1 className="title24 ">Your Consent (PLEASE READ CAREFULLY!)</h1>
          <p className="desc">
            BY ENTERING, CONNECTING TO, ACCESSING OR USING THE SITE, YOU AGREE
            TO THE TERMS AND CONDITIONS SET FORTH IN THIS SITE PRIVACY POLICY,
            INCLUDING THE COLLECTION AND PROCESSING OF YOUR PERSONAL INFORMATION
            (AS DEFINED BELOW). IF YOU DISAGREE TO ANY TERM PROVIDED HEREIN, YOU
            MAY NOT ACCESS AND/OR USE THE SITE IN ANY MANNER WHATSOEVER.
          </p>
          <p className="desc ">
            To the extent that your use or access to the Site are made on behalf
            of another legal or natural person, such access and use must be
            conducted in strict compliance with the Epilog Website Terms and at
            your sole responsibility, and you hereby represent that you received
            the required consent, authority, permission and approval of such
            person to provide Personal Information (as defined below) and to
            allow Epilog to collect, store, and use such Personal Information in
            accordance with this Site Privacy Policy.
          </p>
          <p className="desc ">
            <b>
              PLEASE NOTE: YOU ARE NOT OBLIGATED TO PROVIDE US WITH ANY PERSONAL
              INFORMATION. YOU HEREBY ACKNOWLEDGE AND AGREE THAT YOU ARE
              PROVIDING US WITH SUCH PERSONAL INFORMATION VOLUNTARILY, FOR THE
              PURPOSES DESCRIBED UNDER THIS SITE PRIVACY POLICY, AND THAT WE MAY
              USE, PROCESS AND RETAIN SUCH PERSONAL INFORMATION IN ACCORDANCE
              WITH THIS SITE PRIVACY POLICY AND SUBJECT TO ANY APPLICABLE LAWS
              AND REGULATIONS.
            </b>
          </p>
          <h1 className="title24">
            Which Information Do We Collect on our Users?
          </h1>
          <p className="desc">
            We may collect the following types of data and information from our
            Site Users:
          </p>
          <ul>
            <li className="desc ml-15 left">
              <b>Non-Personal Information: </b> any information that is
              non-identifiable and anonymous information{" "}
              <b>(“Non-personal Information”)</b>. Non-Personal Information is
              collected without particular reference to the identity of the
              applicable User from or about whom such information was collected
              and is available to us while such User is entering and/or using
              the Site. Non-Personal Information which is being collected
              consists of technical, behavioral and aggregated information, and
              may contain, amongst other, the activity of the User on our Site,
              type of operating system, User's ‘click-stream’ on the Site and
              which links the User used, type of browser and keyboard features,
              browser history, User demographics, traffic patterns, etc.
            </li>
            <li className="desc ml-15 left">
              <b>Personal Information: </b> any information that identifies an
              individual, or may with reasonable effort, identify an individual,
              either alone or in combination with other information{" "}
              <b>(“Personal Information”) </b>. Personal Information may be of
              private or sensitive nature of a User or identify an individual.
              Users may be asked to provide certain Personal Information
              including, without limitation, first and last name, phone number,
              country of residence, email address, name of employer’s entity,
              Candidate Information or other contact information, and to the
              extent that you provide us information when contacting us we may
              also receive any types of Personal Information provided under such
              communication which you provide to us of your own volition.
            </li>
          </ul>
          <h1 className="title24">How We Collect Information of Our Users?</h1>
          <p className="desc">There are a few main methods that we use:</p>
          <ul>
            <li className="desc ml-15 left">
              <b>
                Non-Personal Information is collected through your use of the
                Site.{" "}
              </b>{" "}
              We may be aware of your use and/or access of the Site, and may
              gather, collect and record the information relating to such usage,
              either independently or through third-party services as detailed
              below. We may also collect Non-personal Information through the
              analysis aggregation and anonymization of Personal Information
              provided by you.
            </li>
            <li className="desc ml-15 left">
              <b>Personal Information you provide us voluntarily.</b> For
              example, we collect Personal Information when you contact us
              and/or when you register to our services including when you
              contact us to receive a demonstration of Epilog’s Solution and/or
              require support in connection with your use of the Epilog Solution
              and/or you register to receive updates, notices, notifications,
              and announcements related to the Site or the Solution.
            </li>
            <li className="desc ml-15 left">
              <b>
                Personal Information that we collect automatically when you use
                or access the Site.
              </b>{" "}
              This is information which we automatically receive upon you access
              or interact with our Site. This information may include:
              <li className="desc ml-20 left mt-0">
                IP address, UDID (Unique Device Identifier) or other persistent
                user and/or mobile device token (as applicable), geolocation,
                advertising ID, device type, operating system, browser type and
                version, browser history, screen resolution, browser and
                keyboard language, the User’s ‘click-stream’ and activities on
                the Site, the period of time the User visited the Site and
                related time stamps.
              </li>
            </li>
          </ul>
          <p className="desc">
            <b>
              We will not collect any Personal Information from you or related
              to you without your approval, which is obtained, inter alia,
              through your active acceptance of the Site Terms of Use and Site
              Privacy Policy.
            </b>
          </p>
          <p className="desc">
            <b>
              The Purposes and Legal Basis of the Collection, Processing and Use
              of Information
            </b>
          </p>
          <h1 className="title24 underline">Legal Basis for Use</h1>
          <p className="desc">
            We collect, process, and use your Personal Information for the
            purposes described in this Site Privacy Policy, based at least on
            one of the following legal grounds:
          </p>
          <ul>
            <li className="desc ml-15 left">
              <b>In Performing an Agreement with You: </b> We collect and
              process your Personal Information in order to provide you with the
              Site, following your acceptance of this Site Privacy Policy and
              pursuant to the Site Terms of Use; to maintain and improve our
              services to you; to develop new services and features for our
              Users; and to personalize the use of the Site in order for you to
              get a better user experience.
            </li>
            <li className="desc ml-15 left">
              <b>With Your Consent: </b> We ask for your consent to collect and
              process your information for specific purposes and you have the
              right to withdraw your consent at any time.
            </li>
            <li className="desc ml-15 left">
              <b>Legitimate Interest: </b> We process your information for our
              legitimate interests while applying appropriate safeguards that
              protect your privacy. This means that we process your information
              for things like detecting, preventing, or otherwise addressing
              fraud, abuse, security, usability, functionality or technical
              issues with our services, protecting against harm to the rights,
              property or safety of our properties, or our users, or the public
              as required or permitted by law; Enforcing legal claims, including
              investigation of potential violations of this Site Privacy Policy;
              in order to comply and/or fulfil our obligation under applicable
              laws, regulation, guidelines, industry standards and contractual
              requirements, legal process, subpoena or governmental request, as
              well as our Site Terms of Use.
            </li>
          </ul>
          <h1 className="title24 underline">Purpose of Use</h1>
          <p className="desc">
            We may use the Personal Information that we collect about you for
            the following purposes:
          </p>
          <ul>
            <li className="desc ml-15 left">
              To provide, operate, and improve the Site for our Users and to
              manage our business including by creating targeted advertisement
              campaigns.
            </li>
            <li className="desc ml-15 left">
              To send you updates, notices, notifications, and announcements
              related to the Site as well as newsletters, coupons, commercial
              offers and additional communications regarding the Epilog Solution
              and our services.
            </li>
            <li className="desc ml-15 left">
              To enable us to provide you with customer support services and to
              further develop, customize and improve the service based on Users’
              common preferences, uses, attributes and anonymized or
              de-identified data.
            </li>
            <li className="desc ml-15 left">
              To create cumulative statistical data and other cumulative
              information and/or other conclusive information that is
              non-personal, to enable us to improve our Site and provide Users
              with a better user experience with more relevant and accurate
              information, services, third-party services, features and
              functionalities, statistical and research purposes, etc.
            </li>
            <li className="desc ml-15 left">
              To prevent, detect, mitigate, and investigate fraud, security
              breaches or other potentially prohibited or illegal activities.
            </li>
            <li className="desc ml-15 left">
              To comply with any applicable rule or regulation, to protect our
              legal interests and/or respond to or defend against (actual or
              potential) legal proceedings against us or our affiliates.
            </li>
          </ul>
          <h1 className="title24">Sharing Information with Third Parties</h1>
          <p className="desc">
            Epilog will not share or otherwise allow access to any Personal
            Information it collects, or that you provide through the Site to any
            third party, except in the following cases:
          </p>
          <ul>
            <li className="desc ml-15 left">
              <b>
                Law enforcement, legal proceedings, and as authorized by law:
              </b>
              We may disclose Personal Information to satisfy any applicable
              law, regulation, legal process, subpoena or governmental request.
            </li>
            <li className="desc ml-15 left">
              <b>Protecting Rights and Safety:</b> We may share Personal
              Information to enforce this Site Privacy Policy and/or the Site
              Terms of Use, including investigation of potential violations
              thereof; to detect, prevent, or otherwise address fraud, security
              or technical issues; to respond to claims that any content
              available on the Site violates the rights of third-parties; to
              respond to claims that contact information (e.g. name, e-mail
              address, etc.) of a third-party has been posted or transmitted
              without their consent or as a form of harassment; and to protect
              the rights, property, or personal safety of Epilog, any of its
              Users, or the general public.
            </li>
            <li className="desc ml-15 left">
              <b>Our Affiliated Companies:</b> We may share Personal Information
              internally with our family of companies for the purposes described
              in this Site Privacy Policy. In addition, when Epilog or any of
              our affiliated companies is undergoing any change in control,
              including by means of merger, acquisition, or purchase of all or
              substantially all of its assets, we may share Personal Information
              with the parties involved in such event. If we believe that such
              change in control might materially affect your Personal
              Information then stored with us, we will notify you of this event
              and the choices you may have via e-mail and/or prominent notice on
              our Site.
            </li>
            <li className="desc ml-15 left">
              <b>Third Party Services:</b> We partner with certain third parties
              to provide selected services that are used to facilitate and
              enhance the Site and your use thereof{" "}
              <b>(“Service Providers”).</b> Such third party Service Providers
              may have access to, or process on our behalf Personal Information
              which we collect, hold, use, analyze, process and/or manage. These
              Service Providers include hosting, database and server co-location
              services, data analytics services (e.g., Google Analytics), remote
              access services, data and cyber security services, fraud detection
              and prevention services (e.g., Amazon Web Services), e-mail and
              text message distribution and monitoring services, payment
              processors, customer support, and our business, legal and
              financial advisors (collectively, “Third Party Service
              Providers”). We remain responsible for any Personal Information
              processing done by Third Party Service Provider on our behalf,
              except for events outside of our and/or their reasonable control,
              and except with respect to Third Party Service Providers with
              which you are contractually engaged, either through a prior
              separate contractual engagement and/or through acceptance of their
              privacy policy and terms of use if such are referenced herein.
            </li>
          </ul>
          <p className="desc">
            For avoidance of doubt, Epilog may transfer and disclose to third
            parties or otherwise use Non-personal Information at its own
            discretion.
          </p>
          <h1 className="title24">
            Storage, Transfer and Retention of Your Information
          </h1>
          <p className="desc">
            Information regarding the Users will be maintained, processed and
            stored by us and our authorized affiliates and service providers in
            USA.
          </p>
          <p className="desc">
            While the data protection laws in the above jurisdictions may be
            different than the laws of your residence or location, please know
            that we, our affiliates and our service providers that store or
            process your Personal Information on our behalf are each committed
            to keep it protected and secured, pursuant to this Site Privacy
            Policy and industry standards, regardless of any lesser legal
            requirements that may apply in their jurisdiction.
          </p>
          <p className="desc">
            Specifically, each of our Third Party Service Providers which store
            or process your Personal Information either: (i) assured us that
            they provide adequate safeguards to protect your rights to privacy;
            (ii) where applicable, hold and process such information on our
            behalf in a jurisdiction which has been determined to ensure an
            adequate level protection by the EU Commission; (iii) perform such
            processing pursuant to your consent and acceptance of their privacy
            policy as further detailed above.
          </p>
          <p className="desc">
            By providing your information, you expressly consent to the place of
            storage and transfer, including transfers outside of the
            jurisdiction in which the information was provided.
          </p>
          <p className="desc">
            We retain the Personal Information we collect only for as long as
            needed in order to provide you with use of our Site in accordance
            with the terms of this Site Privacy Policy and to comply with
            applicable laws and regulations or otherwise as required for us to
            protect against claims by Users for the relevant statute of
            limitations period. We then either delete from our systems or
            anonymize it without further notice to you.
          </p>
          <h1 className="title24">Candidates</h1>
          <p className="desc mt-0">
            We welcome qualified candidates <b>(“Candidate(s)”</b> to apply to
            any of the open positions posted on our properties by sending us
            your contact details and CV or resume{" "}
            <b>(“Candidate Information”)</b>. Since privacy and discreetness are
            very important to our Candidates, we are committed to keep Candidate
            Information private and will use it solely for our internal
            recruitment purposes.
          </p>
          <p className="desc">
            Please note that we may retain Candidate Information submitted to us
            even after the applied position has been filled or closed. This is
            done so we could re-consider Candidates for other suitable positions
            and opportunities at Epilog; so we could can use the Candidate
            Information as a reference for future applications; and in case the
            Candidate is hired, for additional employment and business purposes
            related to their employment with us.
          </p>
          <p className="desc">
            If you previously submitted your Candidate Information to us, and
            now wish to access it, update it or have it deleted from our
            systems, please contact us at service@epilog.world
          </p>
          <h1 className="title24">
            Updating, Obtaining A Copy of, Or Deleting of Personal Information
          </h1>
          <p className="desc mb-15">
            If for any reason you wish to exercise any rights to which you are
            entitled, under the law applicable to you, such as correction,
            deletion, access to and notification of the types of your Personal
            Information processed by us or on our behalf, you may do so by
            contacting Epilog at support at service@epilog.world. When handling
            these requests, we may ask for additional information to confirm
            your identity and your request.
          </p>
          <p className="desc mt-0 mb-15">
            Subject to limitations pursuant to applicable law and if entitled to
            the same thereunder, if you wish to exercise your right to access
            your Personal Information, you may be able to obtain the Personal
            Information you directly provided us (excluding data we obtained
            from other sources) in a structured, commonly used, and
            machine-readable format and may have the right to transmit such data
            to another party. We may provide such access through the Site.
          </p>
          <p className="desc mt-0 mb-15">
            Please note, that upon request to delete your Personal Information,
            we will delete any such Personal Information pursuant to any
            applicable privacy laws or otherwise, we may de-identify any such
            Personal Information and thereby transform it to become Non-Personal
            Information. We may retain such data in whole or in part to comply
            with any applicable rule or regulation and/or to respond or defend
            against legal proceedings against us or our affiliates.
          </p>
          <p className="desc my-0">
            The rights available to you in connection with your Personal
            Information may also include the following:
          </p>
          <ul>
            <li className="desc mt-15 ml-15 left">
              <b>Right of access.</b> You may have a right to know what
              information we hold about you and, in some cases, to have the
              information communicated to you. We reserve the right to ask for
              reasonable evidence to verify your identity before we provide you
              with any information.{" "}
            </li>
            <li className="desc ml-15 left">
              <b>Right to correct Personal Information.</b> We endeavor to keep
              the information that we hold about you accurate and up to date.
              Should you realize that any of the information that we hold about
              you is incorrect, please let us know and we will correct it as
              soon as we can.
            </li>
            <li className="desc ml-15 left">
              <b>Data deletion.</b> In some circumstances, you have a right to
              request that some portions of the Personal Information that we
              hold about you be deleted or otherwise anonymized.
            </li>
            <li className="desc ml-15 left">
              <b>Data portability. </b> In some circumstances, you may have the
              right to request that data which you have provided to us is
              provided to you, so you can transfer this to another data
              controller.
            </li>
            <li className="desc ml-15 left">
              <b>Restriction of processing.</b> In some cases, you may have the
              right to request a restriction of the processing of your Personal
              Information, such as when you are disputing the accuracy of your
              information held by us.
            </li>
          </ul>
          <p className="desc">
            To find out whether these rights apply to you and on any other
            privacy related matter, you can contact your local data protection
            authority if you have concerns regarding your rights under local
            law.
          </p>
          <h1 className="title24">Minors</h1>
          <p className="desc">
            To accept the terms of this Site Privacy Policy, you must be over
            the age of eighteen (18) years old. If you are between 16 and 18
            years of age, then you must review this Site Privacy Policy with
            your parent or guardian before visiting or using our Site to make
            sure that you and your parent or guardian understand and agree to
            these terms. Without relieving you of your responsibility to comply
            with the Site Terms of Use and the terms hereof we reserve the right
            (without obligation) to request proof of age at any stage so that we
            can verify that minors under the age of eighteen (18) are not using
            our Site.
          </p>
          <p className="desc">
            In the event that we learn that a person under the age of eighteen
            (18) is using our Site, not in accordance with the above-mentioned
            terms, we will use our best efforts to prohibit and block such User
            from accessing our Site and will use our best efforts to promptly
            delete any Personal Information.
          </p>
          <h1 className="title24">
            Local Storage and Third Party Software/Service, Cookies and other
            Tracking Technology
          </h1>
          <h1 className="title24 underline mt-15">Local Storage </h1>
          <p className="desc">
            When you access or use the Site, we may use industry-wide
            technologies which temporarily store certain information on your end
            device (such as your smartphone, your computer or other browsing
            device) (<b>“Local Storage“</b>), and which will allow us to enable
            proper use of the Site, automatic activation of certain features,
            make your browsing experience much more convenient and effortless
            and to provide our customers and potential customers with more
            relevant advertisements of the Epilog Solution and our related
            services. The Local Storage is created per session and may be
            deleted or otherwise configured by you to not accept any such local
            storage.
          </p>
          <h1 className="title24 underline">
            Monitoring and Tracking Technologies
          </h1>
          <p className="desc">
            We also use certain monitoring and tracking technologies, including
            ones offered by Third Party Service Providers, in order to collect
            and process the Personal Information specified above. For example,
            these technologies enable us to: (i) keep track of and apply our
            customer’s and potential customers’ Site preferences and
            authenticated sessions; (ii) better secure our Site by detecting
            abnormal behaviors; (iii) identify technical issues and improve the
            overall performance of our Site; and (iv) create and monitor
            analytics relating to use of our Site.
          </p>
          <h1 className="title24 underline">
            Cookies and Other Tracking Technologies
          </h1>
          <p className="desc">
            A cookie is a small file containing a string of characters that is
            sent to your computer when you visit a website. When you visit the
            website again, the cookie allows that site to recognize your
            browser. A pixel tag (also known as a web beacon) is a piece of code
            embedded on the site that collects information about users’
            engagement on that web page. Cookies and similar technologies may
            store unique identifiers, user preferences and other information.
            You can reset your browser to refuse all cookies or to indicate when
            a cookie is being sent. However, some website features or services
            may not function properly without cookies. To learn more about
            tracking technologies please refer to{" "}
            <a href="www.allaboutcookies.org">www.allaboutcookies.org</a>
            Tracking technologies may include Pixel tags (also commonly known as
            web beacons), transparent images, iFrames, or Java Script placed on
            our Site or our advertisements and emails, that is used to
            understand how you interact with the Site, such advertisements and
            emails.
          </p>
          <p className="desc">
            To learn more about our use of Cookies and other tracking
            technologies, please see our Cookie Policy, available at
            <a href="www.epilog.world/cookies">www.epilog.world/cookies</a>.
            Some of these tracking technologies are provided to us by our
            Third-Party Services Providers who collect and process Personal
            Information on our behalf. These Third Party Services Providers may
            have direct contractual relationship with you (such as Google and
            Facebook), as detailed above.
          </p>
          <p className="desc">
            Additionally, the services provided to us by such Third Party
            Services Providers may entail collection and processing of Personal
            Information by such Third Party Services Providers, in a scope which
            is broader than the scope of Personal Information we are eventually
            provided with by such Third Party Services Providers. This means
            that sometimes these Third Party Services Providers have access to
            more of your Personal Information than we do. To the extent you have
            direct contractual relationship with any of our Third Party Services
            Providers, as further detailed above, any rights you may have with
            respect to your information, collected by such Third Party Services
            Providers, shall be governed by such contractual relationship.
            Otherwise, the terms of this Site Privacy Policy shall fully apply.
          </p>
          <p className="desc">
            In this context you should note that we may use certain third
            parties’ services, such as Google Analytics, Facebook, Twitter,
            LinkedIn and/or YouTube, using functionality of re-marketing through
            their tracking cookies and pixel-based re targeting services. This
            means that if you provided your consent to Google, Facebook Twitter,
            LinkedIn and/or YouTube (the <b>“Social Ad Platforms”</b>) to be
            provided with personalized commercial offers, you may be served with
            ads (including advertisements of third parties) based on your access
            to the Site, outside of the Site and across the internet. Please
            visit the Social Ad Platforms Privacy policy to find out how they
            use such information. If you wish to opt-out of such re-targeting
            and tracking functionality of the Social Ad Platforms, you may do so
            by accessing the settings of the applicable platform.
          </p>
          <p className="desc">
            <b>PLEASE NOTE</b> – such tracking and targeting by Social Ad
            Platforms, is provided pursuant to your engagement with such Social
            Ad Platforms and the actual nature and scope of Personal Information
            collection and processing performed by such Social Ad Platforms is
            not transparent to us. If you would like to learn more or make
            further inquiries with respect to such nature or scope, please refer
            to each of such Social Ad Platforms directly.
          </p>
          <p className="desc mb-0">
            <b>
              Learn more about your choices and how to opt-out of tracking
              technologies:{" "}
            </b>{" "}
            In order to delete or block any tracking technologies, please refer
            to the “Help” area on your internet browser for further instructions
            or learn more by visiting our Cookie Policy. You may also opt out of
            third party tracking technologies by following the relevant
            instructions provided by each such third party in its privacy policy
            or by visiting any of the following:
          </p>
          <ul>
            <li className="desc ml-15 my-0 left">
              <a href="www.youronlinechoices.eu">www.youronlinechoices.eu</a>
            </li>
            <li className="desc ml-15 my-0 left">
              <a href="http://optout.networkadvertising.org/?c=1">
                http://optout.networkadvertising.org/?c=1
              </a>
            </li>
            <li className="desc ml-15 my-0 left">
              <a href="http://www.aboutads.info/choices/">
                http://www.aboutads.info/choices/{" "}
              </a>
            </li>
          </ul>
          <p className="desc">
            Please note however that deleting any of our tracking technologies
            or disabling future tracking technologies may prevent you from
            accessing certain areas or features of our Site or may otherwise
            adversely affect your user experience.
          </p>
          <p className="desc">
            Please also note that we may not respond to the ‘Do Not Track’
            setting on your browser as the protocol and form for such setting
            has not yet been generally accepted.
          </p>
          <p className="title24">Direct Marketing</p>
          <p className="desc mt-0">
            If you provide us with your contact details through the Site or for
            the purpose of receiving from Epilog different offers with respect
            to the Epilog Solution or Epilog services, you hereby agree that we
            may use such contact details, in order to contact you, inform you
            regarding our products and services which may interest you, and send
            you other marketing material, including news and updates by
            transmission to the e-mail address or phone number you have
            provided.
          </p>
          <p className="desc">
            You may withdraw your consent by sending us a written notice via
            email to the following address{" "}
            <a href="service@epilog.world">service@epilog.world</a>.
          </p>
          <h1 className="title24">Security</h1>
          <p className="desc">
            We have implemented appropriate technical, organizational and
            security measures, designed to reduce the risk of accidental
            destruction or loss, or unauthorized disclosure or access to the
            Site. Epilog, however, does not and cannot guarantee that
            unauthorized access will never occur. We urge you to make sure to
            take appropriate measures to protect your browsing device and employ
            reasonable physical security means to protect unauthorized access.
          </p>
          <p className="desc">
            Our Users Personal Information, or parts thereof, are hosted on GCP
            which provides advanced security features. However, please note that
            we cannot guarantee that the Personal Information you provide to us
            when accessing and/or using the Site, will not be exposed as a
            result of unauthorized penetration to the servers. Nevertheless, we
            employ industry standard procedures and policies to ensure the
            safety of its Users’ Personal Information and prevent unauthorized
            use of any such information.
          </p>
          <h1 className="title24">Third Party Websites</h1>
          <p className="desc">
            While using the Site you may encounter links to third party websites
            and/or services. Please be advised that such third party websites
            and/or services are independent from Epilog, and may use cookies and
            other web-tracking technologies, not specified or otherwise handled
            in our Cookie Policy, to collect Non-Personal and/or Personal
            Information about you. We assume no responsibility or liability
            whatsoever with regard to privacy matters or any other legal matter
            with respect to such third party websites and/or services. We
            encourage you to carefully read the privacy policies and the terms
            of use of such third party websites and/or services, as their terms,
            not ours, will apply to any of your interactions with such third
            parties. Epilog has no control over the use of any information you
            provide to these third party services.
          </p>
          <h1 className="title24">Changes to the Website Privacy Policy</h1>
          <p className="desc">
            Epilog reserves the right to change this Site Privacy Policy at any
            time, so please re-visit this page frequently. We will provide
            notice of substantial changes of this Site Privacy Policy on the
            Site and/or if provided by you, we may choose to send you an e-mail
            regarding such substantial changes. Such substantial changes will
            take effect seven (7) days after such notice was provided on any of
            the above-mentioned methods. Otherwise, all other changes to this
            Site Privacy Policy are effective as of the stated “Last Revised”
            date above, and your continued use of the Site after the Last
            Revised date will constitute acceptance of, and agreement to be
            bound by, those changes.
          </p>
          <h1 className="title24">General Information</h1>
          <p className="desc mt-0">
            This Site Privacy Policy and the relationship between you and Epilog
            shall be governed by and construed in accordance with the laws of
            the State of Israel, without regard to its conflict of laws
            principles. You agree to submit to the personal and exclusive
            jurisdiction of the courts located in Tel Aviv and waive any
            jurisdictional, venue or inconvenient forum objections to such
            courts, provided that Epilog may seek injunctive relief in any court
            of competent jurisdiction.
          </p>
          <p className="desc">
            This Site Privacy Policy was written in English and may be
            translated in the future into other languages. If a translated
            (non-English) version of this Site Privacy Policy conflicts in any
            way with the English version, the provisions of the English version
            shall prevail.
          </p>
          <h1 className="title24">Have any Questions?</h1>
          <p className="desc mt-0">
            If you have any questions or comments concerning this Site Privacy
            Policy, you are welcome to send us an email service@epilog.world and
            we will make an effort to reply within a reasonable time frame.
          </p>
          <p className="desc">
            By contacting us, you represent that you are free to do so and that
            you will not knowingly provide Epilog with information that
            infringes upon any third party rights, including any privacy right.
            You further acknowledge that notwithstanding anything herein to the
            contrary, Epilog may use or refrain from using any such information
            at its sole discretion.
          </p>
        </Col>
      </Row>
    </Layout>
  );
}

export default withLoader(Privacy);
