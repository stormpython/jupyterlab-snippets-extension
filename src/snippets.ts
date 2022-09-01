import { ICodeSnippet } from './widget';

const snippets: ICodeSnippet[] = [
  {
    id: 1,
    name: 'Creating a table with SparkSQL',
    description: 'SparkSQL statement for creating a table',
    language: 'python',
    code: [
      'sql_create_string = f"""\n',
      'CREATE TABLE secure.{user}_secure_test\n',
      '    (view_dateint INT, title_id INT, title_desc STRING, view_count INT)\n',
      '    TBLPROPERTIES\n',
      '"""'
    ]
  },
  {
    id: 2,
    name: 'Inserting rows in a table with SparkSQL',
    description: 'SparkSQL statement for inserting rows into a table',
    language: 'python',
    code: [
      'row1_values = (20190101, 2111234, "A new show!", 0)\n',
      'row2_values = (20190317, 987654, "Another show?", 3)\n',
      'sql_insert_string = f"""\n',
      'INSERT INTO secure.{user}_secure_test VALUES {row1_values}, {row2_values}\n',
      '"""'
    ]
  },
  {
    id: 3,
    name: 'Drop a table with SparkSQL',
    description: 'SparkSQL statement for dropping a table',
    language: 'python',
    code: [
      'sql_drop_string = f"""\n',
      'DROP TABLE secure.{user}_secure_test\n',
      '"""\n'
    ]
  },
  {
    id: 4,
    name: 'Read file contents from S3',
    description: 'Example for reading files from S3',
    language: 'python',
    code: [
      'BUCKET_NAME = "S3_Bucket_name"\n',
      'OBJECT_KEY = "Path_to_object_in_bucket"\n',
      'bucket = s3.Bucket(BUCKET_NAME)\n',
      'obj = bucket.Object(OBJECT_KEY)\n',
      'file_contents_as_string = obj.get()["Body"].read().decode("utf-8")\n',
      'print(file_contents_as_string[:100])\n'
    ]
  },
  {
    id: 5,
    name: 'Write data to S3 from notebook',
    description: 'Example for writing data to S3 from a notebook',
    language: 'python',
    code: [
      'from aws import s3\n',
      's = s3.S3()\n',
      'BUCKET_NAME = "s3://your_bucket_name"\n',
      'BUCKET_DIR = "your_bucket_dir"\n',
      'OBJECT_NAME = "your_object_name"\n',
      'data_to_write = "data_to_write_to_s3"\n',
      's.cp_string(data_to_write, f"{BUCKET_NAME}/{BUCKET_DIR}/{OBJECT_NAME}")\n'
    ]
  },
  {
    id: 6,
    name: 'Kragle SQL magic examples',
    description: 'Examples of using Kragle magics to query data',
    language: 'python',
    code: [
      'import kragle\n',
      '%%sql\n',
      'SELECT employee_name, primary_work_email_id, location_desc, business_title_desc, hire_date, termination_date\n',
      'from your_database\n',
      'df.head()\n'
    ]
  }
];

export default snippets;
