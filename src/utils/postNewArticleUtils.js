const createSearchOptions = currentTopics => {
  const newTopic = {
    value: 'newTopic',
    label: 'Create New Topic'
  };
  const newOptions = currentTopics.map(topic => {
    return {
      value: topic.slug,
      label: topic.slug
    };
  });
  const arrayToReturn = [newTopic, ...newOptions];
  return arrayToReturn;
};

export default createSearchOptions;
