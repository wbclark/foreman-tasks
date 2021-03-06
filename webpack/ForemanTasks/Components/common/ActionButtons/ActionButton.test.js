import React from 'react';
import { testComponentSnapshotsWithFixtures, shallow } from '@theforeman/test';

import { ActionButton } from './ActionButton';

const resumeTask = jest.fn();
const cancelTask = jest.fn();
const forceCancelTask = jest.fn();
const taskActions = { resumeTask, cancelTask, forceCancelTask };
const fixtures = {
  'render with cancellable true props': {
    availableActions: {
      cancellable: true,
      resumable: false,
    },
    taskActions,
    id: 'id',
    name: 'some-name',
  },
  'render with resumable true props': {
    availableActions: {
      cancellable: false,
      resumable: true,
    },
    taskActions,
    id: 'id',
    name: 'some-name',
  },
  'render with stoppable and cancellable true props': {
    availableActions: {
      cancellable: true,
      stoppable: true,
    },
    taskActions,
    id: 'id',
    name: 'some-name',
  },
  'render with cancellable false props': {
    availableActions: {
      cancellable: false,
      resumable: false,
    },
    taskActions,
    id: 'id',
    name: 'some-name',
  },
};

describe('ActionButton', () => {
  describe('snapshot test', () =>
    testComponentSnapshotsWithFixtures(ActionButton, fixtures));
  describe('click test', () => {
    const id = 'some-id';
    const name = 'some-name';
    it('cancel', () => {
      const component = shallow(
        <ActionButton
          id={id}
          name={name}
          availableActions={{ cancellable: true }}
          taskActions={taskActions}
        />
      ).children();
      component.props().buttons[0].action.onClick();
      expect(cancelTask).toHaveBeenCalledWith(id, name);
    });
    it('resume', () => {
      const component = shallow(
        <ActionButton
          id={id}
          name={name}
          availableActions={{ resumable: true }}
          taskActions={taskActions}
        />
      ).children();
      component.props().buttons[0].action.onClick();
      expect(resumeTask).toHaveBeenCalledWith(id, name);
    });
    it('force cancel', () => {
      const component = shallow(
        <ActionButton
          id={id}
          name={name}
          availableActions={{ stoppable: true }}
          taskActions={taskActions}
        />
      ).children();
      component.props().buttons[0].action.onClick();
      expect(cancelTask).toHaveBeenCalledWith(id, name);
    });
  });
});
