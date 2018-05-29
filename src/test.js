import F from 'funcunit';
import QUnit from 'steal-qunit';

import 'donejs-testee-coverage/models/test';

F.attach(QUnit);

QUnit.module('donejs-testee-coverage functional smoke test', {
  beforeEach() {
    F.open('./development.html');
  }
});

QUnit.test('donejs-testee-coverage main page shows up', function() {
  F('title').text('donejs-testee-coverage', 'Title is set');
});
