import React from 'react';

export interface ContactDetail {
  label: string;
  value: string;
  href?: string;
  isExternal?: boolean;
}

export interface ContactInfoProps {
  contacts: ContactDetail[];
  footer?: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ contacts, footer }) => {
  return (
    <div>
      <ul className="space-y-3 text-gray-300">
        {contacts.map((contact, index) => (
          <li key={index}>
            <strong className="text-white">{contact.label}:</strong>{' '}
            {contact.href ? (
              <a
                href={contact.href}
                target={contact.isExternal ? '_blank' : undefined}
                rel={contact.isExternal ? 'noopener noreferrer' : undefined}
                className="text-blue-400 hover:text-blue-300 hover:underline"
              >
                {contact.value}
              </a>
            ) : (
              <span>{contact.value}</span>
            )}
          </li>
        ))}
      </ul>
      {footer && (
        <p className="text-gray-400 italic mt-4">{footer}</p>
      )}
    </div>
  );
};

export default ContactInfo;
