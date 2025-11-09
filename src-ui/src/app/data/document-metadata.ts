export interface DocumentMetadata {
  original_checksum?: string

  archived_checksum?: string

  original_mime_type?: string

  media_filename?: string

  original_filename?: string

  has_archive_version?: boolean

  lang?: string

  ai_summary?: string

  ai_keywords?: string[] | string

  ai_suggested_categories?: string[] | string
}
