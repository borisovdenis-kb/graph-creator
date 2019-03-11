import moment from 'moment';

const isEventOnEntity = (event, entityType) => {
  return event.target.id.split('-')[0] === entityType;
};

const createActionObject = (actionDefinition, data) => ({
  ...actionDefinition,
  data,
  date: moment().format('YYYY.MM.DD:HH:mm:ss')
});

export {
  isEventOnEntity,
  createActionObject
}
