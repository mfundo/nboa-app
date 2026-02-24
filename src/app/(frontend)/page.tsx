import PageTemplate, { generateMetadata } from './[slug]/page'

// Use dynamic rendering to avoid database connection during build
export const dynamic = 'force-dynamic'

export default PageTemplate

export { generateMetadata }
