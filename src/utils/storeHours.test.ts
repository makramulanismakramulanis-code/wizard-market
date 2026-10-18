import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateStoreStatus } from './storeHours.ts';

test('store is open on Wednesday at 2:30 PM', () => {
  // 2026-10-21 is a Wednesday
  const wedAfternoon = new Date('2026-10-21T14:30:00');
  const status = calculateStoreStatus(wedAfternoon);
  assert.equal(status.isOpen, true);
  assert.equal(status.statusText, 'Open Now');
  assert.equal(status.detailText, 'Open until 6:00 PM today');
});

test('store is closed on Wednesday morning before 12:00 PM', () => {
  const wedMorning = new Date('2026-10-21T10:15:00');
  const status = calculateStoreStatus(wedMorning);
  assert.equal(status.isOpen, false);
  assert.equal(status.statusText, 'Closed Now');
  assert.equal(status.detailText, 'Opens today at 12:00 PM');
});

test('store is closed on Wednesday evening after 6:00 PM and points to Friday', () => {
  const wedEvening = new Date('2026-10-21T19:00:00');
  const status = calculateStoreStatus(wedEvening);
  assert.equal(status.isOpen, false);
  assert.equal(status.statusText, 'Closed Now');
  assert.equal(status.detailText, 'Opens Friday at 12:00 PM');
});

test('store is closed on Thursday and indicates Friday opening', () => {
  // 2026-10-22 is Thursday
  const thuNoon = new Date('2026-10-22T13:00:00');
  const status = calculateStoreStatus(thuNoon);
  assert.equal(status.isOpen, false);
  assert.equal(status.statusText, 'Closed Now');
  assert.equal(status.detailText, 'Opens Tomorrow at 12:00 PM');
});

test('store is open on Saturday afternoon', () => {
  // 2026-10-24 is Saturday
  const satAfternoon = new Date('2026-10-24T15:00:00');
  const status = calculateStoreStatus(satAfternoon);
  assert.equal(status.isOpen, true);
  assert.equal(status.statusText, 'Open Now');
});

test('store is closed on Sunday and indicates Wednesday opening', () => {
  // 2026-10-25 is Sunday
  const sunNoon = new Date('2026-10-25T14:00:00');
  const status = calculateStoreStatus(sunNoon);
  assert.equal(status.isOpen, false);
  assert.equal(status.detailText, 'Opens Wednesday at 12:00 PM');
});
