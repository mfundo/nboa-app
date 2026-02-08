import * as migration_20260205_151140_add_footer_fields from './20260205_151140_add_footer_fields';

export const migrations = [
  {
    up: migration_20260205_151140_add_footer_fields.up,
    down: migration_20260205_151140_add_footer_fields.down,
    name: '20260205_151140_add_footer_fields'
  },
];
