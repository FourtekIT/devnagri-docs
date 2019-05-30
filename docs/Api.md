# Devnagri API's

## Login API

This Api enables client to login

> `POST : http://dev.devnagri.co.in/api/login`

### Request

```json
{
    email: 'test.client@devnagri.com',
    password: '****'
}
```

### Response

```json
{
    token: 'asdiasdoiasdubdebdsbdaysbduaysbduaysbd'
}
```

## Generate Api Token

> `POST http://dev.devnagri.co.in/api/key/validations`

### Request

```json
{
    client_id  : 'id-of-client',
    client_secret: 'client-secret',
    project_key: 'project-key'
}
```

### Response

```json
    {
        token : 'Your-token'
    }
```

------------------------
Put this token in all headers while sending the request to devnagri.

Example:

```json
    Accept: 'Application/json'
    Authorization : 'bearer your-token-here'
```

------

## Get All Languages

Get all languages that we are using

> `POST: https://dev.devnagri.co.in/api/all-languages`

Response

```json

[
    {
        "name": "Hindi - हिंदी",
        "code": "hi",
        "id": 1
    },
    {
        "name": "Punjabi - ਪੰਜਾਬੀ",
        "code": "pa",
        "id": 2
    }
]
```
--------

## Get All Tags

This api provides all tags that is being used in devnagri.

> `POST: http://dev.devnagri.co.in/api/tags`

Response

```json
[
    {
        "id": 1,
        "name": "Android App",
        "slug": "Android App",
        "group": "project_type"
    },
    {
        "id": 2,
        "name": "Website",
        "slug": "Website",
        "group": "project_type"
    },
   {
        "id": 36,
        "name": "Not Specified",
        "slug": "not-specified",
        "group": "target_audience"
    },
    {
        "id": 37,
        "name": "Children (<13 yrs)",
        "slug": "children-13-yrs",
        "group": "target_audience"
    },
    {
        "id": 41,
        "name": "Seniors (60+ yrs)",
        "slug": "seniors-60-yrs",
        "group": "target_audience"
    },
    {
        "id": 42,
        "name": "Not Specified",
        "slug": "not-specified",
        "group": "level_of_politeness"
    },
    {
        "id": 50,
        "name": "Third Person - Plural (they)",
        "slug": "third-person-plural-they",
        "group": "level_of_politeness"
    }
]

```
------

## Project related API's

### Get Available languages in project

Get Available languages in project.

Request:
> `POST: http://dev.devnagri.co.in/api/projects/{project_id}/available-languages`

Response:

```json

[
    {
        "id": 4,
        "code": "gu",
        "name": "Gujarati - ગુજરાતી"
    },
    {
        "id": 5,
        "code": "kn",
        "name": "Kannada - ಕನ್ನಡ"
    }
]

```
---------

### Get Project Status

Get Status of project.

Request:
> `POST: http://dev.devnagri.co.in/api/projects/{project_id}/project-status`

Response:

```json
{
    "totalWords": 0,
    "pendingWords": 0,
    "translatedWords": 0,
    "reviewedWords": 0,
    "reviewedWordsProgress": 0,
    "translatedWordsProgress": 0,
    "pendingWordsProgress": 0
}
```
------

### Get orders in project

List all the orders in project

Request:
> `POST: http://dev.devnagri.co.in/api/projects/{project_id}/project-orders`

Response:

```json
{
    "orders": [
        {
            "id": 1,
            "fileCount": 1,
            "languages": [
                "Hindi - हिंदी",
                "Punjabi - ਪੰਜਾਬੀ"
            ],
            "proofreading": 0,
            "code": "vLjpPD16",
            "deadline": "5 hours from now",
            "status": "unassigned",
            "created_at": {
                "date": "2018-07-02 17:32:36.000000",
                "timezone_type": 3,
                "timezone": "Asia/Kolkata"
            },
            "totalWords": 24,
            "pendingWords": 24,
            "translatedWords": 0,
            "reviewedWords": 0,
            "reviewedWordsProgress": "0.00",
            "translatedWordsProgress": "0.00",
            "pendingWordsProgress": "100.00",
            "updated": "3 minutes ago"
        }
    ],
    "automatedOrders": [
        {
            "fileCount": 1,
            "languages": [
                "Hindi - हिंदी",
                "Punjabi - ਪੰਜਾਬੀ"
            ],
            "code": "DmANGVa",
            "status": "unassigned",
            "created_at": {
                "date": "2018-07-02 17:33:11.000000",
                "timezone_type": 3,
                "timezone": "Asia/Kolkata"
            },
            "updated": "2 minutes ago"
        }
    ]
}
```

### Get all languages in project

Request:
> `POST: http://dev.devnagri.co.in/api/projects/{project_id}/project-languages`

Response:
```json
[
    {
        "id": 1,
        "name": "Hindi - हिंदी",
        "code": "hi",
        "translatedWordsCount": 0,
        "reviewedWordsCount": 0,
        "totalWordsCount": 31,
        "pendingWordsCount": 31,
        "reviewedWordsProgress": "0.00",
        "translatedWordsProgress": "0.00",
        "pendingWordsProgress": "100.00",
    },
    {
        "id": 2,
        "name": "Punjabi - ਪੰਜਾਬੀ",
        "code": "pa",
        "translatedWordsCount": 0,
        "reviewedWordsCount": 0,
        "totalWordsCount": 31,
        "pendingWordsCount": 31,
        "reviewedWordsProgress": "0.00",
        "translatedWordsProgress": "0.00",
        "pendingWordsProgress": "100.00",
    }
]

```

### Add new language in project

Request: Url
> `POST: http://dev.devnagri.co.in/api/projects/{project_id}/project-add-language`

Parameters:
```
json
{
    languages : 'id-of-language'
}
```

Response:
```json
{
    status : 200
}

```

### To get All Glossaries in project

Request:
> `POST: http://dev.devnagri.co.in/api/projects/{project_id}/project-glossary`

Response:
```json
[
    {
        "id": 1,
        "term": "Kilometers",
        "project_id": "1",
        "description": "a",
        "translatable": 0,
        "created_by": 1,
        "created_at": "2018-07-02 17:54:40",
        "updated_at": "2018-07-02 17:54:40",
        "deleted_at": null
    }
]
```

### To get all files in project
Request:
> `POST: http://dev.devnagri.co.in/api/projects/{project_id}/order-files`

Response:
```json
{
    "current_page": 1,
    "data": [
        {
            "id": 1,
            "project_id": 1,
            "code": "bfd2d1b2-7def-11e8-9d97-0242ac170006",
            "name": "cipher.xml",
            "location": "projects/ad817108-7def-11e8-ba3a-0242ac170006/bfd2b59c-7def-11e8-9d54-0242ac170006.xml",
            "type": "xml",
            "format": "xml",
            "meta_information": "{\"original_location\":null}",
            "status": 1,
            "deleted_at": null,
            "created_at": "2018-07-02 17:32:10",
            "previous_id": null,
            "deletable": false,
            "totalWordsCount": 31,
            "translatedWordsCount": 0,
            "reviewedWordsCount": 0,
            "pendingWordsCount": 31,
            "reviewedWordsProgress": "0.00",
            "translatedWordsProgress": "0.00",
            "pendingWordsProgress": "100.00",
            "orderType": "Hybrid",
            "fileInOrders": 1,
            "statusText": "available",
            }
    ],
    "first_page_url": "/?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "/?page=1",
    "next_page_url": null,
    "path": "/",
    "per_page": 10,
    "prev_page_url": null,
    "to": 1,
    "total": 1
}

```

