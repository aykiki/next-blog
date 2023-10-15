import Form from '@/app/create/components/form';
import { logger } from '@/logger';

/* Create page
 * Wrapper for client form component */
const CreatePost = () => {
  logger.info('CreatePost page called ');

  return <Form />;
};

export default CreatePost;
