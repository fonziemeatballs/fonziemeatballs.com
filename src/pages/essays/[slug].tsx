import EssayLayout from '@components/EssayLayout';
import { getAllDocs, getDocBySlug } from '@lib/docs';
import markdownToHtml from '@lib/markdown';
import { PageMeta } from '../../types'

interface Props {
  content: string, 
  meta: PageMeta
}

const Doc: React.FC<Props> = ({ content, meta }) => {
  return <EssayLayout meta={meta} content={content} />
}

export default Doc

export async function getStaticProps({ params }) {
  const doc = getDocBySlug(params.slug);
  const content = await markdownToHtml(doc.content || '');

  return {
    props: {
      ...doc,
      content
    }
  };
}

export async function getStaticPaths() {
  const docs = getAllDocs();

  return {
    paths: docs.map((doc) => {
      return {
        params: {
          slug: doc.slug
        }
      };
    }),
    fallback: false
  };
}