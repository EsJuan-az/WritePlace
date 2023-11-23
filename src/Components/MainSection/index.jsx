import PropTypes from 'prop-types';
function MainSection({ children }) {
  return (
    <section className='w-3/4 p-4 mt-12 pt-5 m-auto'>
        { children }
    </section>
  );
}
MainSection.propTypes = {
  children: PropTypes.node,
};
export default MainSection;