const codeMenssage = (code: number) => {
  if (code === 0) return ''
  if (code === 200) return 'OK'
  if (code === 201) return 'Created'
  if (code === 202) return 'Accepted'
  if (code === 204) return 'No Content'
  if (code === 301) return 'Moved Permanently'
  if (code === 302) return 'Found'
  if (code === 303) return 'See Other'
  if (code === 304) return 'Not Modified'
  if (code === 307) return 'Temporary Redirect'
  if (code === 308) return 'Permanent Redirect'
  if (code === 400) return 'Bad Request'
  if (code === 401) return 'Unauthorized'
  if (code === 403) return 'Forbidden'
  if (code === 404) return 'Not Found'
  if (code === 405) return 'Method Not Allowed'
  if (code === 406) return 'Not Acceptable'
  if (code === 409) return 'Conflict'
  if (code === 410) return 'Gone'
  if (code === 411) return 'Length Required'
  if (code === 412) return 'Precondition Failed'
  if (code === 413) return 'Payload Too Large'
  if (code === 414) return 'URI Too Long'
  if (code === 415) return 'Unsupported Media Type'
  if (code === 416) return 'Range Not Satisfiable'
  if (code === 417) return 'Expectation Failed'
  if (code === 418) return "I'm a teapot"
  if (code === 422) return 'Unprocessable Entity'
  if (code === 423) return 'Locked'
  if (code === 424) return 'Failed Dependency'
  if (code === 425) return 'Too Early'
  if (code === 426) return 'Upgrade Required'
  if (code === 428) return 'Precondition Required'
  if (code === 429) return 'Too Many Requests'
  if (code === 431) return 'Request Header Fields Too Large'
  if (code === 451) return 'Unavailable For Legal Reasons'
  if (code === 500) return 'Internal Server Error'
  if (code === 501) return 'Not Implemented'
  if (code === 502) return 'Bad Gateway'
  if (code === 503) return 'Service Unavailable'
  if (code === 504) return 'Gateway Timeout'
  if (code === 505) return 'HTTP Version Not Supported'
  if (code === 506) return 'Variant Also Negotiates'
  if (code === 507) return 'Insufficient Storage'
  if (code === 508) return 'Loop Detected'
  if (code === 510) return 'Not Extended'
  if (code === 511) return 'Network Authentication Required'
}

export default codeMenssage
