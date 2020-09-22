import { Migration } from '@mikro-orm/migrations';

export class Migration20200922183403 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table `post` modify `created_at` datetime, modify `updated_at` datetime;');
  }

}
