import { organization } from '../contact'

export default function ContactFacts() {
  return (
    <address className="contact-facts">
      <p>
        {organization.campus}
        <br />
        {organization.street}
        <br />
        {organization.city}
      </p>
      <p>
        <a href={organization.phoneHref}>Call {organization.phone}</a>
        <br />
        <a href={organization.phoneHref.replace('tel:', 'sms:')}>Text us</a>
        <br />
        <a href={`mailto:${organization.applicationEmail}`}>
          {organization.applicationEmail}
        </a>
      </p>
      <p>
        <a
          href={organization.facebook}
          target="_blank"
          rel="noreferrer"
          aria-label="Trinity Springs Christian Academy on Facebook"
          title="Find us on Facebook"
          style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minWidth: 44, minHeight: 44 }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
            <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.095 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.931-1.956 1.887v2.264h3.328l-.532 3.49h-2.796V24C19.612 23.095 24 18.1 24 12.073z" />
          </svg>
        </a>
      </p>
    </address>
  )
}
