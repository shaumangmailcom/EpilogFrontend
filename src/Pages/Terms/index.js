import React, { useState } from "react";
import AppHeader from "../../Components/Header";
import { Row, Col } from "react-bootstrap";
import styles from "./style.module.scss";
import { withLoader } from "../../Components/Loader";
import Layout from "../../Components/Layout";

function Terms() {
  return (
    <Layout>
      <Row className={styles.row}>
        <Col xs={12} md={10} lg={8} xl={6} className={styles.grid}>
          <h1 className="title center ">WEBSITE TERMS OF USE</h1>
          <h1 className="title24 mt-30">
            Last Revised: <span className="title22r">01/01/2023</span>
          </h1>
          <p className="desc">
            Epilog Data Ltd., together with its subsidiaries ({" "}
            <b>“Epilog,” “Company,” “we” “our,” or “us”</b>) welcomes you (the
            “User(s)” or “you”) to our website at{" "}
            <a href="https://app.epilog.world/">https://app.epilog.world/</a> (together
            with its subdomains, Content, and Marks, the <b>“Site”</b>), in
            which we offer basic information regarding our Company and our
            Software-as-a-Service companion platform for people dealing with
            advanced illness (the
            <b> “Solution”</b>).
          </p>
          <p className="desc">
            Each of the Users may use the Site in accordance with the terms and
            conditions hereunder. Please read the following terms and provisions
            <b> (“Site Terms of Use”)</b> carefully before using the Site.
          </p>
          <ul>
            <li className="title24 left">Acceptance of Terms</li>
          </ul>
          <p className="desc">
            By entering, connecting to, accessing or using the Site, you
            acknowledge that you have read and understood these Site Terms of
            Use, including the terms of our Privacy Policy available at:
            <a href="www.app.epilog.world/privacy">
              {" "}
              www.epilog.world/privacy
            </a>{" "}
            (the <b>“Site Privacy Policy”</b>, and together with the Site Terms
            of Use, the <b>“Epilog Website Terms”</b>) and agree that these Site
            Terms of Use constitute a binding and enforceable legal agreement
            with us and that you shall comply with, and be legally bound by
            these Site Terms of Use and with all applicable laws and regulations
            regarding your use of our Site. IF YOU DO NOT AGREE TO BE BOUND BY
            THESE SITE TERMS OF USE OR IF YOU DO NOT POSSESS THE LEGAL CAPACITY
            TO ENTER INTO THESE TERMS, PLEASE DO NOT ACCESS OR USE THE SITE.
          </p>
          <p className="desc">
            Please note that the Site is only intended for individuals aged
            eighteen (18) years or older. If you are under 18 years of age,
            please do not visit or use the Site.
          </p>
          <ul>
            <li className="title24 left">The Site and Our Services</li>
          </ul>
          <p className="desc mb-0">
            The Site is intended to provide basic information about Epilog and
            our services (including without limitation, the Solution and any
            services related thereto).{" "}
            <b>
              Please note that these Site Terms of Use apply only in connection
              with your use of the Site, which in turn is governed only by these
              terms.
            </b>
          </p>
          <p className="desc mt-0">
            The Site serves only as an informative marketing tool, and
            engagements of any sort with us shall only be created via a separate
            agreement. The Content does not bind us in any form, and in any case
            where the Content contradicts or is inconsistent with any
            information supplied by us to you directly, such information shall
            prevail.
          </p>
          <ul>
            <li className="title24 left">Modification of our Site</li>
          </ul>
          <p className="desc">
            We reserve the right at our discretion, to change, modify, correct,
            amend, and/or make any other changes to, our Site (or any part
            thereof, including but not limited to the Content) at any time and
            without any notice. In addition, we may temporarily or permanently
            discontinue the Site and any part thereof. You agree that we shall
            not be liable to you or to any third party for any modification,
            suspension, or discontinuance of our Site and/or of any content
            available or not available therein.
          </p>
          <ul>
            <li className="title24 left">
              {" "}
              User Representations and Undertakings{" "}
            </li>
          </ul>
          <p className="desc mb-0">
            Your use of the Site (or any part thereof) is dependent on the fact
            that you hereby represent and warrant that:
          </p>
          <ul>
            <li className="desc ml-15 left">
              You possess the knowledge and judgment necessary to decide whether
              and how to use the Site or otherwise rely on any information
              available therein;
            </li>
            <li className="desc ml-15 left">
              You acknowledge that you may not solely or fundamentally rely on
              any information, content or any features you find on or through
              the Site;
            </li>
            <li className="desc ml-15 left">
              The execution of the Site Terms of Use does not and will not
              violate any other agreement to which you are bound or any law,
              rule, regulation, order or judgment to which you are subject;
            </li>
            <li className="desc ml-15 left">
              You acknowledge that you are solely responsible for complying with
              applicable laws regarding your use of the Site and you will not
              infringe or violate any of the Site Terms of Use.
            </li>
          </ul>
          <ul>
            <li className="title24 left"> Use Restrictions </li>
          </ul>
          <p className="desc">
            There are certain forms of conduct which are strictly prohibited in
            our Site. Please read the following restrictions carefully. Your
            failure to comply with the provisions set forth herein, may result
            in civil and/or criminal liability. You agree and undertake that you
            shall not, whether by yourself or anyone on your behalf: (i) copy,
            distribute, adapt, translate, reverse engineer, decompile,
            disassemble or modify any part of the Site, or any of the
            information and resources about the Site or accessible through the
            Site, information of any nature concerning Epilog’ systems,
            products, services and technology and any other content related
            thereto (including contact information, videos, text, logos, button
            icons, images, data compilations, links, other specialized content,
            documentation, data, related graphics, intellectual property and
            other features (collectively, the <b>“Content”</b>) and any other
            information related thereto without our prior written authorization;
            (ii) use, modify, create derivative works of, transfer (either by
            sale, resale, license, sublicense, download or otherwise),
            reproduce, distribute, display or disclose Content; (iii) make any
            use of the Site and/or Content on any other website or networked
            computer environment other than in the Site, for any purpose, or
            replicate or copy the Content without our prior written consent;
            (iv) disrupt servers or networks connected to the Site; (v) use or
            launch any automated system (including without limitation, “robots”
            or “spiders”) to access the Site, including not interfering with or
            violating any other User’s right to privacy or other rights, or
            harvest or collect Content or any information about visitors or
            users of the Site without our express written consent, including
            using any robot, spider, site search or retrieval application, or
            other manual or automatic device or process to retrieve, index, or
            data-mine; (vi) circumvent, disable or otherwise interfere with
            security-related features of the Site or features that prevent or
            restrict use or copying of any Content or that enforce limitations
            on use of the Site or disrupt the operation of our Site, or the
            servers or networks that host our Site, or disobey any requirements,
            procedures, policies, or regulations of such servers or networks
            including by performing or assisting any DDOS attacks or any traffic
            hijacking; (vii) create a browser or border environment around our
            Site, Content and any part thereof (no frames or inline linking);
            (viii) defame, abuse, harass, stalk, threaten, or otherwise violate
            the legal rights of others; (x) transmit or otherwise make available
            in connection with our Site any virus, worm, Trojan Horse, time
            bomb, web bug, spyware, or any other computer code, file, or program
            that may or is intended to damage or hijack the operation of any
            hardware, software, or telecommunications equipment, or any other
            actually or potentially harmful, disruptive, or invasive code or
            component; (xi) frame or mirror any part of this Site without
            Company’s prior express written authorization; (xii) create a
            database by systematically downloading and storing all or any of the
            Content from our Site; (xiii) use our Site for any illegal, immoral
            or unauthorized purpose; (xiv) use our Site, the and/or the Content
            for non-personal or commercial purposes without our express prior
            written consent or pursuant to an express written agreement.
          </p>
          <ul>
            <li className="title24 left">
              Product Descriptions and Accurate Information
            </li>
          </ul>
          <p className="desc">
            We have made every effort so that our Site presents any information
            available on our Site as accurately as possible. However, we cannot,
            and do not warrant or guarantee that the Content available on the
            Site is accurate, complete, reliable, current or error-free.
          </p>
          <ul>
            <li className="title24 left">Intellectual Property Rights</li>
          </ul>
          <p className="desc">
            The Site and the Content included therein and all intellectual
            property rights pertaining thereto, including, but not limited to,
            inventions, patents and patent applications, trademarks, trade
            names, service marks, copyrightable materials, and trade secrets,
            logos, whether or not registered or capable of being registered
            (collectively, <b>“Intellectual Property”</b>), including all
            derivatives thereof, are owned by and/or licensed to Epilog and are
            protected by applicable intellectual property laws and international
            conventions and treaties. You may not copy, distribute, display,
            execute publicly, make available to the public, reduce to human
            readable form, decompile, disassemble, adapt, sublicense, make any
            commercial use, sell, rent, lend, process, compile, reverse
            engineer, combine with other software, translate, modify or create
            derivative works of any material that is subject to Company’s
            proprietary rights, including Company’s Intellectual Property,
            either by yourself or by anyone on your behalf, in any way or by any
            means, unless expressly permitted in the Site Terms of Use.
          </p>
          <p className="desc">
            You are hereby prohibited from removing or deleting any and all
            copyright notices, restrictions and signs indicating proprietary
            rights of Epilog or its licensors, including [®], copyright mark [©]
            or trademark [™] contained in or accompanying the Content included
            on the Site, and you represent and warrant that you will abide by
            all applicable laws in this respect.
          </p>
          <p className="desc">
            It is our desire and pleasure to hear from our Users and we welcome
            your comments regarding our offerings, products and services,
            including our Site. To the extent you provide any feedback, comments
            ideas, materials, notes, drawings, concepts, suggestions or other
            information to Epilog regarding the Site and/or the Solution,
            whether within the Site or otherwise (collectively, the{" "}
            <b>“Feedback”</b>), Epilog shall have an exclusive, royalty-free,
            fully paid up, worldwide, perpetual and irrevocable license to
            incorporate the Feedback into the Site, any Company’s current or
            future products, technologies or services and use such Feedback for
            any purpose all without further compensation to you and without your
            approval. You agree that all such Feedback shall be deemed
            non-confidential. Further, you warrant that your Feedback is not
            subject to any license terms that would purport to require us to
            comply with any additional obligations with respect to any of our
            current or future products, technologies or services that
            incorporate any Feedback.
          </p>
          <ul>
            <li className="title24 left">Third Party Sources and Content </li>
          </ul>
          <p className="desc">
            The Site may enable you to view, access, link to, and use content
            from third parties (respectively <b>“Third Party Sources”</b> and{" "}
            <b>“Third Party Content”</b>) that are not owned or controlled by
            us. A Third Party Source may be a third party website or service
            provider. We are not affiliated with and have no control over any
            Third Party Sources. We do not assume any responsibility for the
            content, terms of use, privacy policies, actions or practices of,
            any Third Party Sources. Please read the terms of use and privacy
            policy of any Third Party Source that you interact with before you
            engage in any such activity. We do not endorse any advertising,
            promotions, campaigns, products, services or other materials that
            are included in any Third Party Content or that is communicated to
            you from a Third Party Source. You are solely responsible and liable
            for your interaction with a Third Party Source. You agree to waive,
            and hereby do waive, any legal or equitable rights or remedies you
            may have against us, and release us from any and all liability,
            arising from your use of and interaction with any Third Party
            Content and from your interaction with any Third Party Source. If
            you have any query or complaint regarding a Third Party Source or
            any Third Party Content, your immediate course of action should be
            to contact the Third Party Source directly.{" "}
          </p>
          <ul>
            <li className="title24 left">Availability </li>
          </ul>
          <p className="desc">
            Our Site’s availability and functionality depends on various
            factors, such as communication networks. Epilog does not warrant or
            guarantee that our Site will operate and/or be available at all
            times without disruption or interruption, or that it will be
            error-free.
          </p>
          <ul>
            <li className="title24 left">Disclosure </li>
          </ul>
          <p className="desc">
            We reserve the right to access, read, preserve and disclose any
            information that we obtain in connection with the Site, and your use
            thereof, as we reasonably believe is necessary to: (i) satisfy any
            applicable law, regulation, legal process, subpoena or governmental
            request; (ii) enforce the Epilog Website Terms, including to
            investigate potential violations of them; (iii) detect, prevent or
            otherwise address fraud, security or technical issues; (iv) respond
            to user support requests; or (v) protect the rights, property or
            safety of Epilog, its users or the public.
          </p>
          <ul>
            <li className="title24 left">Privacy </li>
          </ul>
          <p className="desc">
            We will use any personal information that we may collect or obtain
            in connection with the Site in accordance with our Site Privacy
            Policy which is available at <a href="www.epilog.world/privacy">www.epilog.world/privacy</a>
          </p>
          <ul>
            <li className="title24 left">Warranty Disclaimers</li>
          </ul>
          <p className="desc">
            EPILOG DOES NOT WARRANT OR MAKE ANY REPRESENTATIONS REGARDING THE
            USE, THE INABILITY TO USE OR OPERATE, OR THE CONTENT AVAILABLE ON
            OUR SITE. YOU AGREE AND ACKNOWLEDGE THAT THE USE OF OUR SITE IS
            ENTIRELY AT YOUR OWN RISK. YOU ASSUME FULL RESPONSIBILITY FOR ANY
            USE YOU MAKE OF THE SITE. THE SITE (INCLUDING ANY CONTENT, TECHNICAL
            SUPPORT SITE, INFORMATION OR SERVICE AVAILABLE THEREIN) IS PROVIDED
            ON AN “AS IS” AND “AS AVAILABLE” BASIS, AND WITHOUT WARRANTIES OF
            ANY KIND EITHER EXPRESS OR IMPLIED. EPILOG HEREBY DISCLAIMS ALL
            WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED
            WARRANTIES OF ACCURACY, QUALITY, RELIABILITY, SUITABILITY,
            COMPLETENESS, TRUTHFULNESS, USEFULNESS, EFFECTIVENESS,
            MERCHANTABILITY, TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            NON-INFRINGEMENT, AND THOSE ARISING BY STATUTE OR FROM A COURSE OF
            DEALING OR USAGE OF TRADE. EPILOG DOES NOT GUARANTEE THAT THE SITE
            WILL BE FREE OF BUGS, SECURITY BREACHES, OR VIRUS ATTACKS. THE SITE
            MAY OCCASIONALLY BE UNAVAILABLE FOR ROUTINE MAINTENANCE, UPGRADING
            OR OTHER REASONS. YOU AGREE THAT EPILOG WILL NOT BE HELD RESPONSIBLE
            FOR ANY CONSEQUENCES TO YOU OR ANY THIRD PARTY THAT MAY RESULT FROM
            TECHNICAL PROBLEMS OF THE INTERNET, SLOW CONNECTIONS, TRAFFIC
            CONGESTION OR OVERLOAD OF OUR OR OTHER SERVERS. WE DO NOT WARRANT,
            ENDORSE OR GUARANTEE ANY CONTENT, PRODUCT OR SERVICE THAT IS
            FEATURED OR ADVERTISED ON THE SITE BY A THIRD PARTY.
          </p>
          <ul>
            <li className="title24 left">Limitation of Liability</li>
          </ul>
          <p className="desc">
            TO THE FULLEST EXTENT PERMISSIBLE BY LAW, EPILOG, INCLUDING ITS
            OFFICERS, DIRECTORS, SHAREHOLDERS, EMPLOYEES, SUB-CONTRACTORS AND
            ITS AGENTS, SHALL NOT BE LIABLE FOR ANY DAMAGES WHATSOEVER,
            INCLUDING, BUT NOT LIMITED TO, DIRECT, INDIRECT, EXEMPLARY, SPECIAL,
            CONSEQUENTIAL OR INCIDENTAL DAMAGES OF ANY KIND, WHETHER IT WAS
            CAUSED CONSEQUENTLY OR IN CONNECTION WITH THE USE OF THE SITE, THE
            CONTENT OR ANY OTHER INFORMATION DERIVED FROM USE OF THE SITE, OR
            FOR ANY LOSS OF DATA, REVENUE, PROFITS OR REPUTATION, WHETHER IN AN
            ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTIONS ARISING
            UNDER THESE TERMS OR OUT OF YOUR USE OF, OR INABILITY TO USE, THE
            SITE, WHETHER BASED UPON BREACH OF WARRANTY, BREACH OF CONTRACT,
            NEGLIGENCE, STRICT LIABILITY, OR ANY OTHER LEGAL THEORY, EVEN IF
            EPILOG HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. Some
            jurisdictions do not allow the limitation or exclusion of liability
            for incidental or consequential damages, so the above limitations
            may not apply to you.
          </p>
          <p className="desc">
            NO ACTION MAY BE BROUGHT BY YOU FOR ANY BREACH OF THESE TERMS MORE
            THAN ONE (1) YEAR AFTER THE OCCURRENCE OF SUCH CAUSE OF ACTION. IN
            NO EVENT SHALL THE AGGREGATE LIABILITY OF EPILOG FOR ANY DAMAGES
            ARISING UNDER THESE TERMS OR OUT OF YOUR USE OR INABILITY TO USE THE
            SITE, EXCEED THE TOTAL AMOUNT OF FEES, IF ANY, PAID BY YOU TO EPILOG
            FOR USING THE SITE DURING THE THREE (3) MONTHS PRIOR TO BRINGING THE
            CLAIM OR U.S. $1.00, WHICHEVER IS GREATER.
          </p>
          <ul>
            <li className="title24 left">Indemnity </li>
          </ul>
          <p className="desc">
            You agree to defend, indemnify and hold harmless Epilog and its
            affiliates, respective officers, directors, employees and agents,
            from and against any and all claims, damages, obligations, losses,
            liabilities, costs and expenses (including but not limited to
            attorneys’ fees) arising directly or indirectly from your use of, or
            inability to use, the Site, or your violation of these Site Terms of
            Use; (ii) any damage of any sort, whether direct, indirect, special
            or consequential (including your violation of any third party
            rights) resulting from your negligence or willful misconduct; (iii)
            any claim for financial remedies or other compensations due to a
            decision that was taken or not taken or any action that was made or
            not made based on the Content, or any other information resulting
            from the use of the Site; and (iv) your violation of any applicable
            law or rights of a third party or regulation. Without derogating
            from the foregoing, we reserve the right to assume the exclusive
            defense and control of any matter which is subject to
            indemnification by you, which will not excuse your indemnity
            obligations hereunder and in which event you will fully cooperate
            with us in asserting any available defense. You agree not to settle
            any matter subject to an indemnification by you without first
            obtaining our prior express written approval.
          </p>
          <ul>
            <li className="title24 left">Term and Termination </li>
          </ul>
          <p className="desc">
            Epilog, in its sole discretion, has the right to terminate these
            Site Terms of Use and/or your access to the Site, or any part
            thereof, immediately at any time and with or without cause and
            without notice (including, without any limitation, for a breach of
            these Site Terms of Use). Epilog shall not be liable to you or any
            third party for termination of the Site, or any part thereof You
            agree and acknowledge that Epilog does not assume any responsibility
            with respect to, or in connection with the termination of the Site’s
            operation and loss of any data. If you object to any term or
            condition of these Site Terms of Use, or any subsequent
            modifications thereto, or become dissatisfied with the Site in any
            way, your only recourse is to immediately discontinue use of the
            Site. Upon termination of these Site Terms of Use, you shall cease
            all use of the Site. This Section ‎16 and Sections ‎8 (Intellectual
            Property Rights), ‎12 (Privacy), ‎13 (Warranty Disclaimers), ‎14
            (Limitation of Liability), ‎15 (Indemnity), and ‎17 (Independent
            Contractors) to ‎19 (General) shall survive termination of these
            Site Terms of Use.
          </p>
          <ul>
            <li className="title24 left">Changes to these Terms</li>
          </ul>
          <p className="desc">
            We may change the Site Terms of Use from time to time, at our sole
            discretion and without any notice. We will provide notice regarding
            substantial changes of these Site Terms of Use on the homepage of
            the Site and/or if you have provided us with your email address, we
            may choose to send you an e-mail regarding such substantial changes
            to such e-mail address that you have provided. Such substantial
            changes will take effect seven (7) days after such notice was
            provided on our website or sent via email. Otherwise, all other
            changes to these Site Terms of Use are effective as of the stated
            “Last Revised” date and your continued use of our Site after the
            Last Revised date will constitute acceptance of, and agreement to be
            bound by, those changes.
          </p>
          <ul>
            <li className="title24 left">General</li>
          </ul>
          <p className="desc">
            Any heading, caption or section title contained herein is inserted
            only as a matter of convenience, and in no way defines or explains
            any section or provision hereof.
          </p>
          <p className="desc">
            Nothing in these Site Terms of Use creates a partnership, joint
            venture, agency or employment relationship between you and Epilog.
          </p>
          <p className="desc">
            These Site Terms of Use, and any rights and licenses granted
            hereunder, may not be transferred or assigned by you. but may be
            assigned by Epilog without restriction or notification to you.{" "}
          </p>
          <p className="desc">
            Epilog reserves the right to discontinue or modify any aspect of the
            Site at any time.{" "}
          </p>
          <p className="desc">
            These Site Terms of Use and the relationship between you and Epilog
            shall be governed by and construed in accordance with the laws of
            the State of Israel, without regard to its conflict of laws
            principles. You agree to submit to the personal and exclusive
            jurisdiction of the courts located in the Tel-Aviv, Israel and waive
            any jurisdictional, venue or inconvenient forum objections to such
            courts, provided that Epilog may seek injunctive relief in any court
            of competent jurisdiction.{" "}
          </p>
          <p className="desc">
            These Site Terms of Use shall constitute the entire agreement
            between you and Epilog concerning the Site and supersedes any and
            all prior or contemporaneous agreements, understandings, promises,
            conditions, negotiations, covenants or representations, whether
            written or oral, between Epilog and you, including, without
            limitation, those made by or between any of our respective
            representatives, with respect to the Site. If any provision of these
            Site Terms of Use is deemed invalid by a court of competent
            jurisdiction, the invalidity of such provision shall not affect the
            validity of the remaining provisions of these Site Terms of Use,
            which shall remain in full force and effect.{" "}
          </p>
          <p className="desc">
            No waiver of any term of these Site Terms of Use shall be deemed a
            further or continuing waiver of such term or any other term, and a
            party’s failure to assert any right or provision under these Site
            Terms of Use shall not constitute a waiver of such right or
            provision. You further agree that you are not relying upon any
            promise, inducement, representation, statement, disclosure or duty
            of disclosure of Epilog in entering into these Site Terms of Use.
          </p>
          <ul>
            <li className="title24 left">
              For information, questions or notification of errors, please
              contact:
            </li>
          </ul>
          <p className="desc">
            If you have any questions (or comments) concerning the Terms, you
            are most welcome to send us an{" "}
            <mark style={{ backgroundColor: "yellow" }}>e-mail to:</mark>{" "}
            service@epilog.world
          </p>
        </Col>
      </Row>
    </Layout>
  );
}

export default withLoader(Terms);
