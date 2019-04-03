const createSearchOptions = currentTopics => {
  return currentTopics.map(topic => {
    return {
      value: topic.slug,
      label: topic.slug
    };
  });
};

export default createSearchOptions;
