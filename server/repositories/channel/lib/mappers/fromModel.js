import moment from 'moment-timezone';

export default (model) => {
  return {
    id: model.id,
    team_id: model.teamId,
    name: model.name,
    topic: model.topic,
    purpose: model.purpose,
    number_of_members: model.number_of_members,
    created_at: model.createdAt ? moment(model.createdAt).utc().format(): moment().utc().format(),
    updated_at: model.updatedAt ? moment(model.updatedAt).utc().format(): moment().utc().format(),
  };
};