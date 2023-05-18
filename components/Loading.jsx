import React from 'react';
import PropTypes from 'prop-types';

export default function Loading({ isLoading }) {
  if (!isLoading) return <></>;
  return (
    <div className="absolute w-full h-full top-0 left-0 z-50 flex items-center justify-center">
      <div className="absolute w-full h-full z-10 bg-black opacity-75" />
      <span className="z-20 text-white text-3xl">Carregando...</span>
    </div>
  );
}

Loading.defaultProps = {
  isLoading: false,
};

Loading.propTypes = {
  isLoading: PropTypes.bool,
};
