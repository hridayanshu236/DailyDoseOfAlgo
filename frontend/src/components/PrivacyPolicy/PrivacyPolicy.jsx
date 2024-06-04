import React from 'react';
import { Link } from "react-router-dom"; 

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-slate-900 text-white font-poppins p-6">
            <h1 className="text-3xl font-bold mb-6 mt-14 text-center">Privacy Policy</h1>
            <p className="mb-4">Last updated: June 04, 2024</p>
            <p className="mb-4">This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>
            <p className="mb-4">We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.</p>

            <h2 className="text-2xl font-bold mt-6 mb-2">Interpretation and Definitions</h2>
            <h3 className="text-xl font-semibold mt-4 mb-2">Interpretation</h3>
            <p className="mb-4">The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">Definitions</h3>
            <p className="mb-4">For the purposes of this Privacy Policy:</p>
            <ul className="list-disc list-inside mb-4 space-y-2">
                <li><strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</li>
                <li><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</li>
                <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to DailyDoseOfAlgo.</li>
                <li><strong>Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.</li>
                <li><strong>Country</strong> refers to: Nepal</li>
                <li><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</li>
                <li><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</li>
                <li><strong>Service</strong> refers to the Website.</li>
                <li><strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.</li>
                <li><strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</li>
                <li><strong>Website</strong> refers to DailyDoseOfAlgo, accessible from <a href="https://dailydoseofalgo-sanjib-dahals-projects.vercel.app/" target="_blank" className="text-blue-400 underline">DailyDoseOfAlgo.com</a></li>
                <li><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-6 mb-2">Collecting and Using Your Personal Data</h2>
            <h3 className="text-xl font-semibold mt-4 mb-2">Types of Data Collected</h3>

            <h4 className="text-lg font-semibold mt-4 mb-2">Personal Data</h4>
            <p className="mb-4">While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:</p>
            <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Email address</li>
                <li>First name and last name</li>
                <li>Usage Data</li>
            </ul>

            <h4 className="text-lg font-semibold mt-4 mb-2">Usage Data</h4>
            <p className="mb-4">Usage Data is collected automatically when using the Service.</p>
            <p className="mb-4">Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
            <p className="mb-4">When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.</p>
            <p className="mb-4">We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.</p>

            <h4 className="text-lg font-semibold mt-4 mb-2">Tracking Technologies and Cookies</h4>
            <p className="mb-4">We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service. The technologies We use may include:</p>
            <ul className="list-disc list-inside mb-4 space-y-2">
                <li><strong>Cookies or Browser Cookies.</strong> A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service. Unless you have adjusted Your browser setting so that it will refuse Cookies, our Service may use Cookies.</li>
                <li><strong>Web Beacons.</strong> Certain sections of our Service and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of a certain section and verifying system and server integrity).</li>
            </ul>
            {/* <p className="mb-4">Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on Your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web browser. You can learn more about cookies on <a href="https://www.termsfeed.com/blog/cookies/#What_Are_Cookies" target="_blank" className="text-blue-400 underline">TermsFeed website</a> article.</p>
            <p className="mb-4">We use both Session and Persistent Cookies for the purposes set out below:</p>
            <ul className="list-disc list-inside mb-4 space-y-2">
                <li>
                    <p><strong>Necessary / Essential Cookies</strong></p>
                    <p>Type: Session Cookies</p>
                    <p>Administered by: Us</p>
                    <p>Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.</p>
                </li>
                <li>
                    <p><strong>Cookies Policy / Notice Acceptance Cookies</strong></p>
                    <p>Type: Persistent Cookies</p>
                    <p>Administered by: Us</p>
                    <p>Purpose: These Cookies identify if users have accepted the use of cookies on the Website.</p>
                </li>
                <li>
                    <p><strong>Functionality Cookies</strong></p>
                    <p>Type: Persistent Cookies</p>
                    <p>Administered by: Us</p>
                    <p>Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.</p>
                </li>
            </ul> */}

            <h2 className="text-2xl font-bold mt-6 mb-2">Use of Your Personal Data</h2>
            <p className="mb-4">The Company may use Personal Data for the following purposes:</p>
            <ul className="list-disc list-inside mb-4 space-y-2">
                <li>
                    <strong>To provide and maintain our Service</strong>, including to monitor the usage of our Service.
                </li>
                <li>
                    <strong>To manage Your Account:</strong> to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.
                </li>
                <li>
                    <strong>For the performance of a contract:</strong> the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.
                </li>
                <li>
                    <strong>To contact You:</strong> To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.
                </li>
                <li>
                    <strong>To provide You</strong> with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.
                </li>
                <li>
                    <strong>To manage Your requests:</strong> To attend and manage Your requests to Us.
                </li>
            </ul>
            <p className="mb-4">We may share your personal information in the following situations:</p>
            <ul className="list-disc list-inside mb-4 space-y-2">
                <li><strong>With Service Providers:</strong> We may share Your personal information with Service Providers to monitor and analyze the use of our Service, to contact You.</li>
                <li><strong>For business transfers:</strong> We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.</li>
                <li><strong>With Affiliates:</strong> We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.</li>
                <li><strong>With business partners:</strong> We may share Your information with Our business partners to offer You certain products, services or promotions.</li>
                <li><strong>With other users:</strong> when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside.</li>
                <li><strong>With Your consent:</strong> We may disclose Your personal information for any other purpose with Your consent.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-6 mb-2">Retention of Your Personal Data</h2>
            <p className="mb-4">The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.</p>
            <p className="mb-4">The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.</p>

            <h2 className="text-2xl font-bold mt-6 mb-2">Transfer of Your Personal Data</h2>
            <p className="mb-4">Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.</p>
            <p className="mb-4">Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.</p>
            <p className="mb-4">The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.</p>

            <h2 className="text-2xl font-bold mt-6 mb-2">Disclosure of Your Personal Data</h2>
            <h3 className="text-xl font-semibold mt-4 mb-2">Business Transactions</h3>
            <p className="mb-4">If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">Law enforcement</h3>
            <p className="mb-4">Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">Other legal requirements</h3>
            <p className="mb-4">The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:</p>
            <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Comply with a legal obligation</li>
                <li>Protect and defend the rights or property of the Company</li>
                <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
                <li>Protect the personal safety of Users of the Service or the public</li>
                <li>Protect against legal liability</li>
            </ul>

            {/* <h2 className="text-2xl font-bold mt-6 mb-2">Security of Your Personal Data</h2> */}
            {/* <p className="mb-4">The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, */}
            <h2 className="text-2xl font-bold mt-6 mb-2">Changes to this Privacy Policy</h2>
            <p>We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.</p>
            <p>We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.</p>
            <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
            <h2>Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, You can contact us:</p>
            <ul>
                <li>By visiting this page on our website: 
                    <strong className>
                    <Link to="/contact" className="hover:underline">
                        Contact
                    </Link>
                    </strong>
                </li>
            </ul>
        </div>
    );
}

export default PrivacyPolicy;