import { testComponentSnapshotsWithFixtures } from '@theforeman/test';

import { UnlockModal, ForceUnlockModal } from './UnlockModals';

const fixtures = {
  render: { taskID: 'some-id', onClick: jest.fn() },
};

describe('UnlockModal', () => {
  testComponentSnapshotsWithFixtures(UnlockModal, fixtures);
});
describe('ForceUnlockModal', () => {
  testComponentSnapshotsWithFixtures(ForceUnlockModal, fixtures);
});
