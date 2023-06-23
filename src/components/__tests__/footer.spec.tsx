import React from 'react'
import { render, screen } from '@testing-library/react'
import { IntlProvider } from 'react-intl'
import Footer from '../footer'

describe('Footer', () => {
  it('renders with correct year and privacy policy link', () => {
    render(
      <IntlProvider locale="en">
        <Footer lang="en" />
      </IntlProvider>
    )

    const currentYear = new Date().getFullYear().toString()

    // Check that the current year is displayed
    expect(screen.getByText(`© ${currentYear} LabZone s.r.o`)).toBeInTheDocument();
    // Check that the privacy policy link is present
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument()

    // Check that the privacy policy link has correct href
    const privacyPolicyLink = screen.getByText('Privacy Policy').closest('a')
    expect(privacyPolicyLink).toHaveAttribute('href', '/privacy-policy/')
  })
})
