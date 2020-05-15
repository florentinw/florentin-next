import { Header, Subtitle, BodyText, Container, Navbar, GoBackHomeButton, InlineNavItem, MetaHead } from '../../components'
import calcAge from '../components/util/calcAge'

const TermsAndConditions = () => (
  <>
    <MetaHead
      title='Terms and Conditions' description={`${calcAge(
        '2002/06/17'
      )}-year-old digital product designer and dark chocolate enthusiast, focused on creating experiences & beautiful products.`} image={require('../assets/imgs/meta/card.jpg')} slug=''
    />
    <Navbar
      leftContent={<GoBackHomeButton>Back to my works</GoBackHomeButton>}
      rightContent={
        <nav>
          <ul>
            <InlineNavItem href='/legal'>Legal Disclosure</InlineNavItem>
            <InlineNavItem href='/legal/privacypolicy'>Privacy Policy</InlineNavItem>
            <InlineNavItem href='/legal/termsandconditions'>Terms &amp; Conditions</InlineNavItem>
          </ul>
        </nav>
      }
    />
    <Header content='Terms &amp; Conditions' />
    <Container>
      <Subtitle>General</Subtitle>
      <BodyText>
        Divergent, conflicting or supplementary terms and conditions of a contracting party shall only apply in the case of an express,
        written confirmation by Florentin Walter, even if Florentin Walter does not object to them separately.
      </BodyText>
      <BodyText>
        Supplementary or deviating individual agreements require the express written confirmation of Florentin Walter and replace or
        extend the respective regulation of these terms and conditions.
      </BodyText>
      <Subtitle> Changes to the terms and conditions</Subtitle>
      <BodyText>
        Amendments to these terms and conditions shall be communicated to the contracting party in text form and shall be deemed
        approved by the contracting party if the latter does not object in writing to Florentin Walter within one month of notification.
      </BodyText>
      <Subtitle> Conclusion of the contract</Subtitle>
      <BodyText> Offers by Florentin are non-binding and subject to availability and performance.</BodyText>
      <BodyText>
        A contract with Florentin Walter is effective only with written confirmation or performance by Florentin Walter.
      </BodyText>
      <Subtitle> Cooperation and data</Subtitle>
      <BodyText>
        The contracting party is aware and agrees that Florentin Walter will store and use personal data in connection with the business
        relationship in accordance with its privacy policy.
      </BodyText>
      <BodyText>
        Both contractual parties undertake to exchange all information, data and materials necessary for the performance of the
        contractual services or to carry out the contract without delay and to undertake the necessary support and cooperation
        activities without delay. Delivery times are only binding if the client has properly fulfilled any cooperation obligations.
      </BodyText>
      <Subtitle>Liability</Subtitle>
      <BodyText>
        Florentin Walter is liable for damages only in case of intent. This does not apply to damages resulting from the breach of a
        contractual obligation that is essential for achieving the purpose of the contract (cardinal obligation), as well as damages
        resulting from injury to life, limb or health, for which Florentin Walter is also liable for slight negligence.
      </BodyText>
      <BodyText>
        Florentin Walter is not liable for the failure or delay of contractual services and / or for damages due to circumstances for
        which Florentin Walter is not responsible - eg. Force majeure, natural phenomena, armed conflicts, riots, sabotage, disturbances
        of the work peace, official orders, traffic disturbances, lack of raw materials etc. - are due.
      </BodyText>
      <BodyText>
        Claims of the client against Florentin Walter due to a breach of duty expire one year after the statutory limitation period.
        Exceptions to this are claims for damages. For these, the statutory limitation periods apply.
      </BodyText>
      <BodyText>
        The contracting party is obliged to inspect the services of Florentin Walter immediately. If no written complaint about any
        defects or non-fulfilment is made to Florentin Walter within two weeks of the performance of the contract, the performance of
        Florentin Walter shall be deemed accepted. Obvious defects must be reported in writing to Florentin Walter within a period of
        one week from receipt of the products or services at the latest; hidden defects must be reported within a period of one week
        from the date of discovery; otherwise the assertion of any warranty or supplementary performance claims is excluded. In the case
        of legitimate complaints regarding performance, Florentin Walter initially provides, at its option, warranty through repair or
        replacement. Liability for defects that do not or only insignificantly impair the value or usability is excluded.
      </BodyText>
      <BodyText>
        The release of production and publication is carried out by the client. With the release, the client assumes the liability for
        the technical and functional correctness of text, image, design and product.
      </BodyText>
      <BodyText>
        Florentin Walter is not obligated to review or examine the contents and / or data of the contracting party or a third party
        commissioned or mediated by the contracting party or based on specifications of the contracting party. If the customer is not
        entitled to use this equipment or the materials are not free from third-party rights, Florentin Walter shall be indemnified in
        the internal relationship from all claims for compensation by third parties.
      </BodyText>
      <BodyText>
        The backup, storage or archiving of original documents and / or data (eg contractual services) is the sole responsibility of the
        contractual partner. Florentin Walter is entitled, but not obliged, to make at least one copy.
      </BodyText>
      <Subtitle> Rejection / modification / cancellation of orders, services and / or projects</Subtitle>
      <BodyText>
        Florentin Walter is entitled to reject legally, commercially and / or technically flawed, dubious or unreasonable contents and /
        or materials and to refuse or cancel associated orders, services and / or projects. In these cases, reduction or damage claims
        of the contracting party are excluded.
      </BodyText>
      <BodyText>
        Any gratuitous services and services of Florentin Walter can be discontinued at any time. Even in such a case, reduction or
        damage claims by the contracting party are excluded.
      </BodyText>
      <BodyText>
        If the contractor changes orders, projects or other ongoing services, consultancy, work or planning and / or media interventions
        contrary to a vote previously made with Florentin Walter or terminates the contract or Florentin Walter legitimately rejects or
        terminates these changes, the contractor has Florentin Walter to reimburse all costs incurred, including expenses incurred and
        still to be incurred (and no longer avoidable) and any commissions and fees that may be forfeited, to reimburse damages and
        indemnify Florentin Walter against all third-party liabilities in accordance with the contract.
      </BodyText>
      <BodyText>
        In the event of termination before commencement of work, the contract partner Florentin Walter has to reimburse 10% of the
        agreed fee.
      </BodyText>
      <BodyText> The customer reserves the right to prove that the service is lower or higher.</BodyText>
      <Subtitle> Fee, terms of payment</Subtitle>
      <BodyText>
        The invoices issued by Florentin Walter to the client are due immediately upon receipt of the invoice without any deductions.
        For larger orders or those that extend over a longer period, Florentin Walter is entitled to make interim or advance invoices.
      </BodyText>
      <BodyText>
        If the contractual partner is in default, Florentin Walter is entitled to refrain from further services. Legal claims of
        Florentin Walter remain unaffected. In addition, Florentin Walter may demand the statutory default interest, at least interest
        in the usual bank amount and compensation for dunning costs. The assertion of a further damage remains unaffected.
      </BodyText>
      <BodyText>
        Proposals, instructions and suggestions of the client for technical, creative or other reasons and other cooperation have no
        influence on the fee and do not constitute a co-copyright.
      </BodyText>
      <Subtitle> Procurement to third parties</Subtitle>
      <BodyText>
        Florentin Walter is entitled to carry out the work entrusted by the client himself or, if not otherwise agreed in individual
        cases, to assign it to participating third parties in his own name and for his own account. With the exception of a possible
        selection fault Florentin Walter is not liable for services and work results of the commissioned service providers.
      </BodyText>
      <Subtitle> Freedom of design</Subtitle>
      <BodyText> Florentin Walter has freedom of design within the scope of the contract</BodyText>
      <Subtitle> Confidentiality</Subtitle>
      <BodyText>
        Both contracting parties mutually commit themselves to the confidentiality and exclusively contractual use with regard to all
        information, data and acquired knowledge about business and / or trade secrets of the respective other contracting party
        exchanged or exchanged before and during the term of the contract. This duty of confidentiality shall not apply to information
        which is demonstrably well-known or generally known, without being the responsibility of the Party concerned, or which was
        already known to the Party concerned before it has been made available to it by the other Party. Furthermore, the
        confidentiality obligation does not apply insofar as a Party or a party is legally or officially obliged to disclose
        information, provided that such obligation is communicated in writing prior to the disclosure of the respective other party.
      </BodyText>
      <BodyText>
        The above confidentiality obligation expires three years after termination of the contractual or business relationship.
      </BodyText>
      <Subtitle> Final provisions</Subtitle>
      <BodyText>
        The law of the Federal Republic of Germany applies - excluding the provisions of the UN Sales Convention. Other law does not
        apply even if the contracting party has its registered office and / or delivery address abroad.
      </BodyText>
      <BodyText> Place of fulfilment for performance and payment is the domicile of Florentin Walter, Bürgstadt.</BodyText>
      <BodyText>
        If the contractual partner is a merchant, a legal person under public law or a special fund under public law, the exclusive
        place of jurisdiction for all disputes arising from or in connection with the business relationship is the registered office of
        Florentin Walter, Bürgstadt. Florentin Walter is entitled, regardless of the amount in dispute at its own discretion to sue the
        competent district or regional court. The same applies if the contractual partner has no general place of jurisdiction in
        Germany or if his domicile or habitual residence is unknown at the time the complaint is filed.
      </BodyText>
      <BodyText>
        Should individual provisions of the contract, including these general terms and conditions, be or become wholly or partially
        invalid or unenforceable, this shall not affect the validity of the remaining provisions. The wholly or partially ineffective or
        unenforceable contract regulation shall be replaced by an effective and enforceable provision, the economic success of which
        comes as close as possible to the ineffective or unenforceable provision. The same applies to the case of a regulatory gap. If
        the ineffectiveness or impracticability of a regulation is based on a determination of performance or time, then the legally
        permissible measure applies instead.
      </BodyText>
    </Container>
  </>
)

export default TermsAndConditions
